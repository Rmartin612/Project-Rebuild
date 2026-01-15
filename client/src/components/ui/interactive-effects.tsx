import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-accent to-primary z-[100] origin-left"
      style={{ scaleX }}
      data-testid="scroll-progress"
    />
  );
}

interface StaggeredRevealProps {
  children: React.ReactNode[];
  className?: string;
  staggerDelay?: number;
}

export function StaggeredReveal({ children, className = "", staggerDelay = 0.1 }: StaggeredRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className={className}>
      {children.map((child, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{
            duration: 0.6,
            delay: index * staggerDelay,
            ease: [0.25, 0.1, 0.25, 1]
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  tiltAmount?: number;
}

export function TiltCard({ children, className = "", tiltAmount = 8 }: TiltCardProps) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const rotateX = ((e.clientY - centerY) / (rect.height / 2)) * -tiltAmount;
    const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * tiltAmount;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setIsHovering(false);
  };

  return (
    <motion.div
      className={`${className}`}
      style={{ perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        animate={{
          rotateX: rotate.x,
          rotateY: rotate.y,
          scale: isHovering ? 1.02 : 1
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

interface ParallaxFloatingProps {
  children: React.ReactNode;
  offset?: number;
  className?: string;
}

export function ParallaxFloating({ children, offset = 50, className = "" }: ParallaxFloatingProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

interface FloatingElementProps {
  className?: string;
  delay?: number;
  duration?: number;
  size?: "sm" | "md" | "lg";
  variant?: "circle" | "ring" | "dot";
}

export function FloatingElement({ 
  className = "", 
  delay = 0, 
  duration = 6,
  size = "md",
  variant = "circle"
}: FloatingElementProps) {
  const sizes = {
    sm: "w-8 h-8",
    md: "w-16 h-16",
    lg: "w-24 h-24"
  };

  const variants = {
    circle: "bg-primary/5 dark:bg-primary/10 rounded-full",
    ring: "border-2 border-primary/10 dark:border-primary/20 rounded-full",
    dot: "bg-accent/20 dark:bg-accent/30 rounded-full"
  };

  return (
    <motion.div
      className={`absolute pointer-events-none ${sizes[size]} ${variants[variant]} ${className}`}
      animate={{
        y: [0, -20, 0],
        x: [0, 10, 0],
        rotate: [0, 5, 0],
        scale: [1, 1.05, 1]
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
}

interface AnimatedGradientProps {
  className?: string;
  children?: React.ReactNode;
}

export function AnimatedGradient({ className = "", children }: AnimatedGradientProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 0% 0%, hsl(215 60% 30% / 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 50%, hsl(215 60% 30% / 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 100%, hsl(215 60% 30% / 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 0% 0%, hsl(215 60% 30% / 0.3) 0%, transparent 50%)"
          ]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            "radial-gradient(circle at 100% 100%, hsl(32 85% 52% / 0.2) 0%, transparent 50%)",
            "radial-gradient(circle at 0% 50%, hsl(32 85% 52% / 0.2) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 0%, hsl(32 85% 52% / 0.2) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 100%, hsl(32 85% 52% / 0.2) 0%, transparent 50%)"
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      {children}
    </div>
  );
}

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export function TextReveal({ text, className = "", delay = 0 }: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const words = text.split(" ");

  return (
    <span ref={ref} className={className}>
      {words.map((word, index) => (
        <span key={index} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: "100%" }}
            animate={isInView ? { y: 0 } : { y: "100%" }}
            transition={{
              duration: 0.5,
              delay: delay + index * 0.05,
              ease: [0.25, 0.1, 0.25, 1]
            }}
          >
            {word}&nbsp;
          </motion.span>
        </span>
      ))}
    </span>
  );
}

interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
}

export function ImageReveal({ src, alt, className = "" }: ImageRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 1.2, opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
      </motion.div>
    </div>
  );
}

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

export function MagneticButton({ children, className = "", strength = 0.3 }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = (e.clientX - centerX) * strength;
    const y = (e.clientY - centerY) * strength;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
    >
      {children}
    </motion.div>
  );
}

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export function CountUp({ end, duration = 2, suffix = "", prefix = "", className = "" }: CountUpProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}
