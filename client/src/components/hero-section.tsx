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
  const [isMuted, setIsMuted] = useState(true);

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
    <section ref={targetRef} id="home" className="h-[300vh] relative">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        
        {/* Content Container */}
        <motion.div 
          className="container max-w-7xl mx-auto px-6 text-center relative z-20"
          style={{ opacity: textOpacity, y: textY }}
        >
          {/* Logo */}
          <div className="logo-container mb-12">
            <div className="logo-glow"></div>
            <div className="flex items-center justify-center w-[360px] h-[360px] md:w-[480px] md:h-[480px] mx-auto">
              <img 
                src={logoImage} 
                alt="CODICORE Logo" 
                className="w-full h-full object-contain drop-shadow-2xl"
                data-testid="img-hero-logo"
              />
            </div>
          </div>
          
          {/* Main Heading - Company Name */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 gradient-text tracking-tight">
            CODICORE
          </h1>
          
          {/* Tagline */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-300 mb-16 tracking-wide max-w-3xl mx-auto">
            Where <span className="text-primary font-semibold">Ideas</span> Meet <span className="text-secondary font-semibold">Code</span>
          </h2>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <button 
              onClick={() => setLocation('/products')} 
              className="px-10 py-5 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] hover:bg-[position:100%_0] text-white text-lg font-semibold rounded-2xl transition-smooth hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 flex items-center gap-3"
              data-testid="button-explore-products"
            >
              <span>Explore Products</span>
              <ArrowRight size={22} />
            </button>
            <button 
              onClick={() => setLocation('/dashboard')} 
              className="px-10 py-5 glass-card text-foreground text-lg font-semibold rounded-2xl transition-smooth hover:scale-105 flex items-center gap-3"
              data-testid="button-view-dashboard"
            >
              <Play size={22} />
              <span>View Dashboard</span>
            </button>
          </div>
        </motion.div>

        {/* Background Video */}
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
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background/80"></div>
        </motion.div>

        {/* Video Controls */}
        <motion.div 
          className="absolute bottom-8 right-8 z-30 flex gap-4"
          style={{ opacity: videoOpacity }}
        >
          <button 
            onClick={togglePlayPause}
            className="w-14 h-14 glass-morphism rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-fast hover:scale-110"
            data-testid="button-video-play-pause"
          >
            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
          </button>

          <button 
            onClick={toggleMute}
            className="w-14 h-14 glass-morphism rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-fast hover:scale-110"
            data-testid="button-video-mute"
          >
            {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
          style={{ opacity: textOpacity }}
        >
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center items-start pt-2 animate-pulse-slow">
            <ChevronDown className="w-4 h-4 text-primary animate-bounce" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
