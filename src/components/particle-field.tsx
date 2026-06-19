"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  hue: number;
  pulse: number;
};

export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const context = canvas.getContext("2d");
    if (!context || reduceMotion.matches) return;

    let frame = 0;
    let animationId = 0;
    let width = 0;
    let height = 0;
    let pixelRatio = 1;
    let particles: Particle[] = [];
    const pointer = { active: false, x: 0, y: 0 };

    const createParticle = (): Particle => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.42,
      vy: (Math.random() - 0.5) * 0.42,
      size: 1.2 + Math.random() * 2.8,
      hue: Math.random() > 0.45 ? 183 : 218,
      pulse: Math.random() * Math.PI * 2,
    });

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * pixelRatio);
      canvas.height = Math.floor(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      const targetCount = Math.min(96, Math.max(42, Math.floor((width * height) / 9000)));
      particles = Array.from({ length: targetCount }, createParticle);
    };

    const movePointer = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.active = true;
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
    };

    const leavePointer = () => {
      pointer.active = false;
    };

    const draw = () => {
      frame += 0.01;
      context.clearRect(0, 0, width, height);

      const gradient = context.createRadialGradient(
        width * 0.25,
        height * 0.2,
        0,
        width * 0.45,
        height * 0.35,
        Math.max(width, height) * 0.7,
      );
      gradient.addColorStop(0, "rgba(15, 159, 154, 0.12)");
      gradient.addColorStop(0.45, "rgba(37, 99, 235, 0.07)");
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
      context.fillStyle = gradient;
      context.fillRect(0, 0, width, height);

      for (const particle of particles) {
        if (pointer.active) {
          const dx = pointer.x - particle.x;
          const dy = pointer.y - particle.y;
          const distance = Math.hypot(dx, dy);
          if (distance < 150 && distance > 1) {
            const force = (150 - distance) / 150;
            particle.vx += (dx / distance) * force * 0.018;
            particle.vy += (dy / distance) * force * 0.018;
          }
        }

        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vx *= 0.992;
        particle.vy *= 0.992;

        if (particle.x < -10) particle.x = width + 10;
        if (particle.x > width + 10) particle.x = -10;
        if (particle.y < -10) particle.y = height + 10;
        if (particle.y > height + 10) particle.y = -10;
      }

      for (let i = 0; i < particles.length; i += 1) {
        const first = particles[i];
        for (let j = i + 1; j < particles.length; j += 1) {
          const second = particles[j];
          const dx = first.x - second.x;
          const dy = first.y - second.y;
          const distance = Math.hypot(dx, dy);
          if (distance < 118) {
            context.strokeStyle = `rgba(15, 159, 154, ${0.14 * (1 - distance / 118)})`;
            context.lineWidth = 1;
            context.beginPath();
            context.moveTo(first.x, first.y);
            context.lineTo(second.x, second.y);
            context.stroke();
          }
        }
      }

      for (const particle of particles) {
        const pulse = 0.72 + Math.sin(frame * 2 + particle.pulse) * 0.28;
        const radius = particle.size * pulse;
        context.fillStyle = `hsla(${particle.hue}, 82%, 48%, 0.45)`;
        context.beginPath();
        context.arc(particle.x, particle.y, radius, 0, Math.PI * 2);
        context.fill();

        context.fillStyle = `hsla(${particle.hue}, 92%, 72%, 0.16)`;
        context.beginPath();
        context.arc(particle.x, particle.y, radius * 3.4, 0, Math.PI * 2);
        context.fill();
      }

      animationId = window.requestAnimationFrame(draw);
    };

    resize();
    draw();

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    canvas.addEventListener("pointermove", movePointer);
    canvas.addEventListener("pointerleave", leavePointer);

    return () => {
      window.cancelAnimationFrame(animationId);
      observer.disconnect();
      canvas.removeEventListener("pointermove", movePointer);
      canvas.removeEventListener("pointerleave", leavePointer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-auto absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
