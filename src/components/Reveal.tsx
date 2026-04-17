"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

type Direction = "up" | "left" | "right";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  direction?: Direction;
  className?: string;
  as?: "div" | "section" | "article" | "li" | "span";
};

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const offsetFor = (direction: Direction) => {
  switch (direction) {
    case "left":
      return { x: -48, y: 0 };
    case "right":
      return { x: 48, y: 0 };
    default:
      return { x: 0, y: 48 };
  }
};

export function Reveal({
  children,
  delay = 0,
  direction = "up",
  className,
  as = "div",
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { x, y } = offsetFor(direction);

  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial={{ opacity: 0, x, y }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : undefined}
      transition={{ duration: 0.7, delay, ease: EASE_OUT }}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </MotionTag>
  );
}
