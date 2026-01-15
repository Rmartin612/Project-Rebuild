import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface KenBurnsCarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
  interval?: number;
  className?: string;
  overlay?: boolean;
}

export function KenBurnsCarousel({
  images,
  interval = 6000,
  className,
  overlay = true,
}: KenBurnsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setDirection(Math.random() > 0.5 ? 1 : -1);
  }, [images.length]);

  useEffect(() => {
    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [nextSlide, interval]);

  const kenBurnsVariants = [
    {
      initial: { scale: 1, x: 0, y: 0 },
      animate: { scale: 1.15, x: -20, y: -10 },
    },
    {
      initial: { scale: 1.15, x: 20, y: 10 },
      animate: { scale: 1, x: 0, y: 0 },
    },
    {
      initial: { scale: 1, x: -20, y: 0 },
      animate: { scale: 1.12, x: 20, y: -15 },
    },
    {
      initial: { scale: 1.12, x: 0, y: -20 },
      animate: { scale: 1, x: -10, y: 10 },
    },
  ];

  const currentVariant = kenBurnsVariants[currentIndex % kenBurnsVariants.length];

  return (
    <div className={cn("relative overflow-hidden", className)} data-testid="carousel-ken-burns">
      <AnimatePresence mode="sync">
        <motion.div
          key={currentIndex}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <motion.img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="w-full h-full object-cover"
            initial={currentVariant.initial}
            animate={currentVariant.animate}
            transition={{
              duration: interval / 1000,
              ease: "linear",
            }}
          />
        </motion.div>
      </AnimatePresence>

      {overlay && (
        <div className="absolute inset-0 bg-gradient-hero-overlay pointer-events-none" />
      )}

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              index === currentIndex
                ? "bg-white w-6"
                : "bg-white/40 hover:bg-white/60"
            )}
            aria-label={`Go to slide ${index + 1}`}
            data-testid={`carousel-dot-${index}`}
          />
        ))}
      </div>
    </div>
  );
}
