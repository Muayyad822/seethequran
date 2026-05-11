import React, { useEffect, useRef } from 'react';

const ParticleLayer = ({ config }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let particles = [];
    const count = config.count || 100;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * (config.speed === 'fast' ? 2 : 0.5);
        this.speedY = (Math.random() - 0.5) * (config.speed === 'fast' ? 2 : 0.5);
        
        if (config.direction === 'upward') this.speedY = -Math.abs(this.speedY) - 0.5;
        if (config.direction === 'downward') this.speedY = Math.abs(this.speedY) + 0.5;
        
        this.opacity = Math.random() * 0.5 + 0.1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
          this.reset();
          if (config.direction === 'upward') this.y = canvas.height;
          if (config.direction === 'downward') this.y = 0;
        }
      }

      draw() {
        ctx.fillStyle = config.color || '#ffffff';
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        
        if (config.type === 'stars') {
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        } else if (config.type === 'dust' || config.type === 'embers') {
          ctx.rect(this.x, this.y, this.size, this.size);
        } else {
          ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
        }
        
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    init();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [config]);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-10 pointer-events-none mix-blend-screen"
    />
  );
};

export default ParticleLayer;
