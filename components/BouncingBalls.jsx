"use client";

import { useEffect, useRef } from "react";

const BALLS = [
  { size: 180, color: "#ff6b57" },
  { size: 130, color: "#10b981" },
  { size: 96, color: "#ffd23f" },
  { size: 72, color: "#ffffff" },
  { size: 56, color: "#10b981" },
];

const BouncingBalls = ({ scale = 1 }) => {
  const containerRef = useRef(null);
  const animationRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const fit = Math.min(1, container.offsetWidth / 520);
    const balls = BALLS.map(({ size, color }) => {
      const s = Math.round(size * scale * fit);
      const element = document.createElement("div");
      element.className = "absolute rounded-full sticker-lg";
      element.style.width = `${s}px`;
      element.style.height = `${s}px`;
      element.style.backgroundColor = color;
      element.style.willChange = "transform";
      container.appendChild(element);
      return {
        size: s,
        x: Math.random() * Math.max(0, container.offsetWidth - s),
        y: Math.random() * Math.max(0, container.offsetHeight - s),
        vx: (Math.random() - 0.5) * 2.4,
        vy: (Math.random() - 0.5) * 2.4,
        element,
      };
    });

    const animate = () => {
      const w = container.offsetWidth;
      const h = container.offsetHeight;
      balls.forEach((ball) => {
        ball.x += ball.vx;
        ball.y += ball.vy;
        const maxX = w - ball.size - 8;
        const maxY = h - ball.size - 8;
        if (ball.x <= 0 || ball.x >= maxX) {
          ball.vx = -ball.vx;
          ball.x = Math.max(0, Math.min(maxX, ball.x));
        }
        if (ball.y <= 0 || ball.y >= maxY) {
          ball.vy = -ball.vy;
          ball.y = Math.max(0, Math.min(maxY, ball.y));
        }
        ball.element.style.transform = `translate(${ball.x}px, ${ball.y}px)`;
      });
      animationRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationRef.current);
      balls.forEach((ball) => ball.element.remove());
    };
  }, [scale]);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    />
  );
};

export default BouncingBalls;
