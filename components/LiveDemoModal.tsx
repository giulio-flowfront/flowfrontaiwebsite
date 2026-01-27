import React, { useState, useEffect, useRef } from 'react';
import { X, Mic, MicOff, PhoneOff, Volume2 } from 'lucide-react';
import { GoogleGenAI, Modality, LiveServerMessage } from '@google/genai';

interface LiveDemoModalProps {
  onClose: () => void;
}

const LiveDemoModal: React.FC<LiveDemoModalProps> = ({ onClose }) => {
  const [isActive, setIsActive] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [status, setStatus] = useState('Ready to call...');
  const [transcription, setTranscription] = useState<string[]>([]);
  
  const audioContextRef = useRef<AudioContext | null>(null);
  const nextStartTimeRef = useRef<number>(0);
  const sessionRef = useRef<any>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const startCall = async () => {
    try {
      setStatus('Connecting...');
      
      // Fixed: Initialize ai instance with named apiKey parameter using process.env.API_KEY directly
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const inputAudioContext = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });
      const outputAudioContext = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      audioContextRef.current = outputAudioContext;

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      const sessionPromise = ai.live.connect({
        model: 'gemini-2.5-flash-native-audio-preview-12-2025',
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Kore' } },
          },
          systemInstruction: 'You are Flow, a professional and helpful AI receptionist for FlowFront AI. You handle calls for a clinic or SMB. Be polite, friendly, and concise. Your goal is to show how naturally you can converse with a caller.',
          inputAudioTranscription: {},
          outputAudioTranscription: {},
        },
        callbacks: {
          onopen: () => {
            setStatus('On Call');
            setIsActive(true);
            
            const source = inputAudioContext.createMediaStreamSource(stream);
            const scriptProcessor = inputAudioContext.createScriptProcessor(4096, 1, 1);
            
            scriptProcessor.onaudioprocess = (e) => {
              if (isMuted) return;
              const inputData = e.inputBuffer.getChannelData(0);
              const pcmBlob = createBlob(inputData);
              // Fixed: Solely rely on sessionPromise resolves to send input data
              sessionPromise.then(session => {
                session.sendRealtimeInput({ media: pcmBlob });
              });
            };

            source.connect(scriptProcessor);
            scriptProcessor.connect(inputAudioContext.destination);
          },
          onmessage: async (message: LiveServerMessage) => {
            // Handle Transcription
            if (message.serverContent?.inputTranscription) {
              setTranscription(prev => [...prev.slice(-4), `User: ${message.serverContent?.inputTranscription?.text}`]);
            }
            if (message.serverContent?.outputTranscription) {
              setTranscription(prev => [...prev.slice(-4), `Flow: ${message.serverContent?.outputTranscription?.text}`]);
            }

            // Handle Audio Output - Decodes raw PCM stream returned by the API
            const base64Audio = message.serverContent?.modelTurn?.parts[0]?.inlineData?.data;
            if (base64Audio && outputAudioContext) {
              nextStartTimeRef.current = Math.max(nextStartTimeRef.current, outputAudioContext.currentTime);
              const audioData = decode(base64Audio);
              const audioBuffer = await decodeAudioData(audioData, outputAudioContext, 24000, 1);
              
              const source = outputAudioContext.createBufferSource();
              source.buffer = audioBuffer;
              source.connect(outputAudioContext.destination);
              
              // Correct: Scheduling the next audio chunk for smooth gapless playback
              source.start(nextStartTimeRef.current);
              nextStartTimeRef.current += audioBuffer.duration;
            }

            // Correct: Handle interruptions to stop current playback if needed
            if (message.serverContent?.interrupted) {
              nextStartTimeRef.current = 0;
            }
          },
          onerror: (e) => {
            console.error('Gemini Live error:', e);
            setStatus('Connection Error');
          },
          onclose: () => {
            setStatus('Call Ended');
            setIsActive(false);
          }
        },
      });

      sessionRef.current = await sessionPromise;
      
    } catch (err) {
      console.error('Failed to start call:', err);
      setStatus('Microphone access denied or API error.');
    }
  };

  const endCall = () => {
    if (sessionRef.current) sessionRef.current.close();
    if (streamRef.current) streamRef.current.getTracks().forEach(track => track.stop());
    setIsActive(false);
    setStatus('Call Ended');
    onClose();
  };

  /**
   * Encodes float32 audio data to 16-bit PCM for the Live API
   */
  const createBlob = (data: Float32Array) => {
    const l = data.length;
    const int16 = new Int16Array(l);
    for (let i = 0; i < l; i++) {
      int16[i] = data[i] * 32768;
    }
    return {
      data: encode(new Uint8Array(int16.buffer)),
      mimeType: 'audio/pcm;rate=16000',
    };
  };

  /**
   * Manual base64 decoding implementation as required
   */
  const decode = (base64: string) => {
    const binaryString = atob(base64);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
  };

  /**
   * Manual base64 encoding implementation as required
   */
  const encode = (bytes: Uint8Array) => {
    let binary = '';
    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  };

  /**
   * Decodes raw PCM bytes into an AudioBuffer suitable for playback
   */
  async function decodeAudioData(data: Uint8Array, ctx: AudioContext, sampleRate: number, numChannels: number): Promise<AudioBuffer> {
    const dataInt16 = new Int16Array(data.buffer);
    const frameCount = dataInt16.length / numChannels;
    const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);
    for (let channel = 0; channel < numChannels; channel++) {
      const channelData = buffer.getChannelData(channel);
      for (let i = 0; i < frameCount; i++) {
        channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
      }
    }
    return buffer;
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm">
      <div className="glass w-full max-w-md rounded-[40px] p-8 relative overflow-hidden custom-shadow">
        <button onClick={onClose} className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors">
          <X size={24} />
        </button>

        <div className="text-center mb-8">
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 mx-auto mb-6 flex items-center justify-center relative">
            {isActive && (
              <>
                <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-25"></div>
                <div className="absolute -inset-4 border border-blue-500/20 rounded-full animate-pulse"></div>
              </>
            )}
            <Volume2 size={32} className="text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-1">FlowFront Demo</h3>
          <p className={`text-sm font-medium ${isActive ? 'text-green-400' : 'text-gray-400'}`}>
            {status}
          </p>
        </div>

        {/* Transcription Area */}
        <div className="bg-white/5 rounded-2xl p-4 mb-8 min-h-[120px] flex flex-col justify-end gap-2 border border-white/5">
          {transcription.length === 0 ? (
            <p className="text-center text-xs text-gray-500 italic">Conversation will appear here...</p>
          ) : (
            transcription.map((line, i) => (
              <p key={i} className={`text-xs ${line.startsWith('Flow') ? 'text-blue-400' : 'text-gray-300'}`}>
                {line}
              </p>
            ))
          )}
        </div>

        <div className="flex justify-center gap-6">
          {!isActive ? (
            <button 
              onClick={startCall}
              className="px-10 py-4 gradient-btn rounded-full font-bold flex items-center gap-2 hover:opacity-90 transition-all"
            >
              <Mic size={20} /> Start Call
            </button>
          ) : (
            <>
              <button 
                onClick={() => setIsMuted(!isMuted)}
                className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${isMuted ? 'bg-red-500/20 text-red-500' : 'glass text-gray-400'}`}
              >
                {isMuted ? <MicOff size={24} /> : <Mic size={24} />}
              </button>
              <button 
                onClick={endCall}
                className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center text-white hover:bg-red-700 transition-all shadow-lg shadow-red-600/20"
              >
                <PhoneOff size={24} />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LiveDemoModal;