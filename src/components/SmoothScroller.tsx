'use client';

import { ReactLenis } from 'lenis/react';

export default function SmoothScroller({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.5 }}>
      {children}
    </ReactLenis>
  );
}

