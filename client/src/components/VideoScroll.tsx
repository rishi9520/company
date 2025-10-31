import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Yeh ek free stock video hai. Aap iski jagah apne software ki video daal sakte hain.
const videoUrl = "https://videos.pexels.com/video-files/3209828/3209828-hd_1920_1080_25fps.mp4";

export default function VideoScroll() {
  // useRef ka use karke hum neeche wale section (div) ko target karenge.
  const targetRef = useRef<HTMLDivElement>(null);

  // useScroll hook. Yeh humein batayega ki jab 'targetRef' wala section screen par hai, to hum kitna scroll kar chuke hain.
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"] // [section ka start jab screen ke end ko touch kare, section ka end jab screen ke start ko touch kare]
  });

  // useTransform hook. Yeh scrollYProgress (0 se 1) ki value ko scale (0.5 se 1) me badlega.
  const scale = useTransform(scrollYProgress, [0.1, 0.7], [0.5, 1]);
  // Jab scroll 10% hoga, scale 0.5 hoga. Jab scroll 70% hoga, scale 1 hoga.

  return (
    // Humne is section ko 'targetRef' diya hai.
    <section ref={targetRef} className="h-[200vh] relative">
      {/* 'sticky' aur 'top-0' se video screen par chipki rahegi jab tak section scroll ho raha hai. */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        
        {/* motion.div jisme video hai. Iska 'style' scroll ke saath badlega. */}
        <motion.div 
          className="w-[80vw] h-[80vh] rounded-2xl"
          style={{ scale }} // Yahan scale ki value scroll ke hisaab se apply hogi.
        >
          <video
            className="w-full h-full object-cover rounded-2xl"
            src={videoUrl}
            autoPlay
            muted
            loop
            playsInline // Yeh mobile par auto play ke liye zaroori hai.
          />
        </motion.div>
      </div>
    </section>
  );
}