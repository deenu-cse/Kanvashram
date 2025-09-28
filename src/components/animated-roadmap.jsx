// components/animated-roadmap.jsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

// Sub-component for a single milestone marker
const MilestoneMarker = ({ milestone, progress, isMobile }) => {
  const position = isMobile && milestone.mobilePosition ? milestone.mobilePosition : milestone.position;

  const milestoneProgress = (milestone.id - 1) / 5;

  const tooltipOpacity = useTransform(progress, 
    [milestoneProgress - 0.1, milestoneProgress, milestoneProgress + 0.2], 
    [0, 1, 1]
  );

  const tooltipScale = useTransform(progress, 
    [milestoneProgress - 0.1, milestoneProgress, milestoneProgress + 0.1], 
    [0.3, 1, 1]
  );

  const tooltipY = useTransform(progress, 
    [milestoneProgress - 0.1, milestoneProgress], 
    [20, 0]
  );

  return (
    <motion.div
      className="absolute flex flex-col items-center justify-center"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: 'translate(-50%, -50%)'
      }}
    >
      <motion.div 
        className={cn(
          "relative z-10 bg-white rounded-full shadow-lg border-2 border-amber-300",
          isMobile ? "p-2" : "p-3"
        )}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ 
          duration: 0.6, 
          delay: milestone.id * 0.3, 
          type: "spring",
          stiffness: 100
        }}
        viewport={{ once: true, amount: 0.5 }}
        whileHover={{ scale: isMobile ? 1 : 1.1, rotate: isMobile ? 0 : 5 }}
      >
        {milestone.icon}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-amber-300"
          animate={{ scale: [1, 1.5, 1], opacity: [0.7, 0, 0.7] }}
          transition={{ duration: 2, repeat: Infinity, delay: milestone.id * 0.5 }}
        />
      </motion.div>

      <motion.div 
        className={cn(
          "absolute bg-white rounded-lg shadow-xl p-4 z-20 border border-amber-200",
          isMobile 
            ? "top-full mt-3 w-48 left-1/2 transform -translate-x-1/2"
            : "top-full mt-4 w-64"
        )}
        style={{
          opacity: tooltipOpacity,
          scale: tooltipScale,
          y: tooltipY
        }}
        initial={{ opacity: 0, scale: 0.8, y: 10 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ 
          duration: 0.8, 
          delay: milestone.id * 0.4,
          type: "spring",
          stiffness: 100
        }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {!isMobile && (
          <>
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 border-8 border-transparent border-b-amber-200" />
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 border-6 border-transparent border-b-white mt-1" />
          </>
        )}
        <h3 className={cn(
          "font-bold text-amber-900 mb-2",
          isMobile ? "text-base" : "text-lg"
        )}>
          {milestone.title}
        </h3>
        <p className={cn(
          "text-gray-600 mb-3 leading-relaxed",
          isMobile ? "text-xs" : "text-sm"
        )}>
          {milestone.description}
        </p>
        <div className="space-y-1">
          {milestone.distance && (
            <div className={cn(
              "flex items-center text-amber-700",
              isMobile ? "text-xs" : "text-sm"
            )}>
              <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
              <span>Distance: {milestone.distance}</span>
            </div>
          )}
          {milestone.duration && (
            <div className={cn(
              "flex items-center text-amber-700",
              isMobile ? "text-xs" : "text-sm"
            )}>
              <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
              <span>Duration: {milestone.duration}</span>
            </div>
          )}
        </div>
      </motion.div>

      <motion.div 
        className={cn(
          "absolute w-1 bg-gradient-to-b from-amber-300 to-transparent top-0 transform -translate-y-full",
          isMobile ? "h-8" : "h-12"
        )}
        initial={{ opacity: 0, height: 0 }}
        whileInView={{ opacity: 1, height: isMobile ? 32 : 48 }}
        transition={{ 
          duration: 0.6, 
          delay: milestone.id * 0.3 + 0.2,
          ease: "easeOut"
        }}
        viewport={{ once: true, amount: 0.5 }}
      />
    </motion.div>
  );
};

const MovingDot = ({ pathLength, isMobile }) => {
  const dotX = useTransform(pathLength, [0, 1], isMobile ? [30, 970] : [50, 950]);
  const dotY = useTransform(pathLength, [0, 1], isMobile ? [400, 150] : [500, 250], {
    transformer: (value) => {
      if (isMobile) {
        if (value < 0.33) return 400 - (value / 0.33) * 250;
        else if (value < 0.66) return 150 + ((value - 0.33) / 0.33) * 100;
        else return 250 - ((value - 0.66) / 0.34) * 100;
      } else {
        if (value < 0.33) return 500 - (value / 0.33) * 300;
        else if (value < 0.66) return 200 + ((value - 0.33) / 0.33) * 150;
        else return 350 - ((value - 0.66) / 0.34) * 100;
      }
    }
  });

  return (
    <motion.circle
      r={isMobile ? 6 : 8}
      fill="#f59e0b"
      stroke="#fff"
      strokeWidth="2"
      style={{
        cx: dotX,
        cy: dotY,
      }}
    />
  );
};

const AnimatedRoadmap = React.forwardRef(({ className, milestones, mapImageSrc, ...props }, ref) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const pathLength = useTransform(scrollYProgress, [0.15, 0.7], [0, 1]);
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const pathD = isMobile 
    ? "M 30 400 Q 250 150 450 250 T 970 150"
    : "M 50 500 Q 250 200 450 350 T 950 250";

  return (
    <div
      ref={targetRef}
      className={cn(
        "relative w-full max-w-6xl mx-auto",
        isMobile ? "py-8 h-auto min-h-[400px]" : "py-16 h-[600px]"
      )}
      {...props}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className={cn(
          "absolute inset-0",
          isMobile ? "top-4" : "top-10"
        )}
      >
        <img
          src={mapImageSrc}
          alt="Route to Kanvashram"
          className="h-full w-full object-contain opacity-15"
        />
      </motion.div>

      <div className={cn(
        "relative w-full",
        isMobile ? "h-[300px]" : "h-[600px]"
      )}>
        <svg
          width="100%"
          height="100%"
          viewBox={isMobile ? "0 0 1000 400" : "0 0 1000 600"}
          preserveAspectRatio="none"
          className="absolute top-0 left-0"
        >
          <motion.path
            d={pathD}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth={isMobile ? 4 : 6}
            strokeDasharray="10 5"
            style={{ pathLength }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="50%" stopColor="#d97706" />
              <stop offset="100%" stopColor="#b45309" />
            </linearGradient>
          </defs>
          <MovingDot pathLength={pathLength} isMobile={isMobile} />
        </svg>

        {milestones.map((milestone) => (
          <MilestoneMarker 
            key={milestone.id} 
            milestone={milestone} 
            progress={smoothProgress}
            isMobile={isMobile}
          />
        ))}
      </div>
    </div>
  );
});

AnimatedRoadmap.displayName = "AnimatedRoadmap";

export { AnimatedRoadmap };
