// client/src/components/hero-section.tsx

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, ArrowRight, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { useLocation } from 'wouter';
import logoImage from '@asset/logo.png';

const videoUrl = "/videos/skoolhub-promo.mp4"; 

export default function HeroSection() {
  const [, setLocation] = useLocation();
  const targetRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true); 
  const [isMuted, setIsMuted] = useState(true); // 🔊 default: muted

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.2], ["0%", "-50%"]);
  const videoScale = useTransform(scrollYProgress, [0.1, 0.7], [0.6, 1]);
  const videoOpacity = useTransform(scrollYProgress, [0.05, 0.2], [0, 1]);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      const newMuted = !isMuted;
      videoRef.current.muted = newMuted;
      setIsMuted(newMuted);
    }
  };

  return (
    <section ref={targetRef} id="home" className="h-[300vh] relative bg-background">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        
        {/* ========== Text + Buttons ========== */}
        <motion.div 
          className="container mx-auto px-6 text-center relative z-20"
          style={{ opacity: textOpacity, y: textY }}
        >
          <div className="logo-container mb-6">
            <div className="logo-glow"></div>
            <div className="flex items-center justify-center w-[500px] h-[500px] mx-auto mb-6">
              <img src={logoImage} alt="CODICORE Logo" className="w-full h-full object-contain" />
            </div>
          </div>
          
          {/* Tagline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-200 mb-12 tracking-wide">
            Where <span className="text-primary font-semibold">Ideas</span> Meet <span className="text-secondary font-semibold">Code</span>
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button 
              onClick={() => setLocation('/products')} 
              className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold hover-lift transition-all duration-300 hover:scale-105 flex items-center space-x-2"
            >
              <span>Explore Products</span>
              <ArrowRight size={20} />
            </button>
            <button 
              onClick={() => setLocation('/dashboard')} 
              className="px-8 py-4 glass-morphism text-foreground rounded-xl font-bold hover-lift transition-all duration-300 hover:scale-105 flex items-center space-x-2"
            >
              <Play size={20} />
              <span>View Dashboard</span>
            </button>
          </div>
        </motion.div>

        {/* ========== Background Video ========== */}
        <motion.div 
          className="absolute inset-0 z-0 flex items-center justify-center"
          style={{ opacity: videoOpacity }}
        >
          <motion.video
            ref={videoRef}
            className="w-full h-full object-cover"
            src={videoUrl}
            autoPlay
            muted={isMuted}
            loop
            playsInline
            style={{ scale: videoScale }}
          />
        </motion.div>

        {/* ========== Play / Pause Button ========== */}
        <motion.div 
          className="absolute bottom-8 right-8 z-30 flex gap-4"
          style={{ opacity: videoOpacity }}
        >
          <button 
            onClick={togglePlayPause}
            className="w-14 h-14 glass-morphism rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all"
          >
            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
          </button>

          {/* 🔊 Mute / Unmute Button */}
          <button 
            onClick={toggleMute}
            className="w-14 h-14 glass-morphism rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all"
          >
            {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
          </button>
        </motion.div>

        {/* ========== Scroll Indicator ========== */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
          style={{ opacity: textOpacity }}
        >
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center items-start pt-2">
            <ChevronDown className="w-4 h-4 text-primary animate-bounce" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
