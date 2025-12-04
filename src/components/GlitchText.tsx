'use client';

import { cn } from '@/lib/utils';

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
}

export default function GlitchText({ text, className, as: Component = 'span' }: GlitchTextProps) {
  return (
    <Component className={cn('glitch-wrapper inline-block', className)}>
      <span className="relative z-10">{text}</span>
      <span className="glitch-layer" aria-hidden="true">{text}</span>
      <span className="glitch-layer" aria-hidden="true">{text}</span>
    </Component>
  );
}

