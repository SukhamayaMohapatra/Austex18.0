"use client";
import React, { useEffect, useState, useRef } from "react";
import { Typography } from "@mui/material";
import { useInView } from "framer-motion";

export default function AnimatedCounter({ value, duration = 2, suffix = "", prefix = "", ...props }) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    let startTimestamp = null;
    let animationFrame;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      
      // Easing function (easeOutExpo)
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * value));

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(step);
      }
    };

    if (isInView) {
      animationFrame = window.requestAnimationFrame(step);
    }

    return () => {
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, [value, duration, isInView]);

  return (
    <Typography ref={nodeRef} {...props}>
      {prefix}{count}{suffix}
    </Typography>
  );
}
