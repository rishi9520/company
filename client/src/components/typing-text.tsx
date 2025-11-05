import { useState, useEffect } from 'react';

interface TypingTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  onComplete?: () => void;
}

export default function TypingText({ 
  text, 
  speed = 50, 
  delay = 0, 
  className = '',
  onComplete 
}: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isReady, setIsReady] = useState(delay === 0);

  // Handle initial delay before starting typing
  useEffect(() => {
    if (delay > 0 && !isReady) {
      const delayTimeout = setTimeout(() => {
        setIsReady(true);
      }, delay);

      return () => clearTimeout(delayTimeout);
    }
  }, [delay, isReady]);

  // Handle character-by-character typing
  useEffect(() => {
    if (!isReady) {
      return;
    }

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (!isComplete && currentIndex === text.length && text.length > 0) {
      setIsComplete(true);
      onComplete?.();
    }
  }, [isReady, currentIndex, text, speed, isComplete, onComplete]);

  return (
    <span className={className}>
      {displayedText}
      {!isComplete && <span className="animate-pulse">|</span>}
    </span>
  );
}
