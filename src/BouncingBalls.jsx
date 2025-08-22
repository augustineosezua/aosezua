import { useEffect, useRef } from "react";

const BouncingBalls = () => {
  const containerRef = useRef(null);
  const ballsRef = useRef([]);
  const animationRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Initialize 12 balls with random positions and velocities
    const balls = [];
    for (let i = 0; i < 6; i++) {
      balls.push({
        x: Math.random() * (container.offsetWidth - 20),
        y: Math.random() * (container.offsetHeight - 20),
        vx: (Math.random() - 0.5) * 4, // Random velocity between -2 and 2
        vy: (Math.random() - 0.5) * 4,
        element: null,
      });
    }

    // Create ball elements
    balls.forEach((ball, index) => {
      const ballElement = document.createElement("div");
      ballElement.className = "absolute w-9 h-9 bg-red-500 rounded-full shadow-lg opacity-70";
      ballElement.style.transform = `translate(${ball.x}px, ${ball.y}px)`;
      ballElement.style.willChange = "transform";
      container.appendChild(ballElement);
      ball.element = ballElement;
    });

    ballsRef.current = balls;

    // Animation loop
    const animate = () => {
      balls.forEach((ball) => {
        // Update position
        ball.x += ball.vx;
        ball.y += ball.vy;

        // Bounce off walls
        if (ball.x <= 0 || ball.x >= container.offsetWidth - 36) {
          ball.vx = -ball.vx;
          ball.x = Math.max(0, Math.min(container.offsetWidth - 36, ball.x));
        }
        if (ball.y <= 0 || ball.y >= container.offsetHeight - 36) {
          ball.vy = -ball.vy;
          ball.y = Math.max(0, Math.min(container.offsetHeight - 36, ball.y));
        }

        // Update element position using transform for better performance
        if (ball.element) {
          ball.element.style.transform = `translate(${ball.x}px, ${ball.y}px)`;
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup function
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      balls.forEach((ball) => {
        if (ball.element && ball.element.parentNode) {
          ball.element.parentNode.removeChild(ball.element);
        }
      });
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 1 }}
      id="balls"
    />
  );
};

export default BouncingBalls;
