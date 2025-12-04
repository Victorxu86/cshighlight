'use client';

import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export default function AudioPlayer({ src, className }: { src: string; className?: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  // Fake visualization bars
  const bars = Array.from({ length: 20 });

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    const setAudioData = () => {
      setDuration(audio.duration);
    };
    
    const onEnd = () => {
      setIsPlaying(false);
      setProgress(0);
    }

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('loadedmetadata', setAudioData);
    audio.addEventListener('ended', onEnd);

    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('loadedmetadata', setAudioData);
      audio.removeEventListener('ended', onEnd);
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  }
  
  const formatTime = (time: number) => {
    if(isNaN(time)) return "0:00";
    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60);
    return `${min}:${sec < 10 ? '0' + sec : sec}`;
  }

  return (
    <div className={cn("group relative overflow-hidden rounded-xl border border-white/10 bg-black/40 p-6 backdrop-blur-xl", className)}>
      {/* Background visualizer */}
      <div className="absolute inset-0 flex items-center justify-center gap-1 opacity-10 pointer-events-none">
          {bars.map((_, i) => (
              <motion.div 
                key={i}
                animate={{ height: isPlaying ? [10, 40, 10] : 10 }}
                transition={{ 
                    repeat: Infinity, 
                    duration: 0.5, 
                    delay: i * 0.05,
                    repeatType: "mirror"
                }}
                className="w-2 bg-cyan-500 rounded-full"
              />
          ))}
      </div>

      <audio ref={audioRef} src={src} />
      
      <div className="relative z-10 flex items-center gap-6">
        <button
            onClick={togglePlay}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500 text-black shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] hover:scale-105 transition-all"
        >
            {isPlaying ? <Pause className="h-6 w-6 fill-current" /> : <Play className="h-6 w-6 ml-1 fill-current" />}
        </button>

        <div className="flex-1 space-y-2">
            <div className="flex justify-between text-xs font-mono text-cyan-500/70">
                <span>{formatTime(audioRef.current?.currentTime || 0)}</span>
                <span>{formatTime(duration)}</span>
            </div>
            
            {/* Progress Bar */}
            <div 
                className="relative h-1 w-full cursor-pointer rounded-full bg-white/10 group/bar"
                onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const percent = (e.clientX - rect.left) / rect.width;
                    if(audioRef.current) audioRef.current.currentTime = percent * duration;
                }}
            >
                <motion.div
                    className="absolute left-0 top-0 h-full rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                    style={{ width: `${progress}%` }}
                    layoutId="progressBar"
                />
                <div 
                    className="absolute top-1/2 -translate-y-1/2 h-3 w-3 bg-white rounded-full shadow opacity-0 group-hover/bar:opacity-100 transition-opacity" 
                    style={{ left: `${progress}%` }}
                />
            </div>
        </div>

        <button
            onClick={toggleMute}
            className="text-slate-500 hover:text-white transition-colors"
        >
            {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
        </button>
      </div>
    </div>
  );
}
