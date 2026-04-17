import type { Metadata } from "next";
import { dmSans, instrumentSerif, jetbrainsMono } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "FlowFront AI — Your Front Desk, Reimagined",
  description:
    "FlowFront AI answers every call, books every appointment, and never puts a customer on hold. The AI receptionist for small businesses — live in 48 hours.",
  metadataBase: new URL("https://flowfrontai.com"),
  openGraph: {
    title: "FlowFront AI — Your Front Desk, Reimagined",
    description:
      "The AI receptionist for small businesses. 24/7 call answering, automated booking, and live dashboards. Setup in 48 hours.",
    type: "website",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${instrumentSerif.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased">
        {children}
        <div aria-hidden className="grain-overlay" />
      </body>
    </html>
  );
}
