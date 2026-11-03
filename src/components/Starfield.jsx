import { useEffect, useRef } from 'react';

export default function Starfield() {
  const ref = useRef();
  useEffect(() => {
    const canvas = ref.current, context = canvas.getContext('2d');
    if (!context) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    let width, height, stars, frame, last = 0;
    const draw = (time = 0) => {
      if (!reduced.matches) frame = requestAnimationFrame(draw);
      if (document.hidden || time - last < 40 && time !== 0) return;
      last = time;
      context.clearRect(0, 0, width, height);
      for (const star of stars) {
        const alpha = reduced.matches ? star.alpha : star.alpha * (0.65 + 0.35 * Math.sin(time * 0.0005 + star.phase));
        context.fillStyle = 'rgba(211,204,255,' + alpha + ')';
        context.beginPath(); context.arc(star.x, star.y, star.size, 0, Math.PI * 2); context.fill();
      }
    };
    const resize = () => {
      width = innerWidth; height = innerHeight;
      const ratio = Math.min(devicePixelRatio || 1, 1.5);
      canvas.width = width * ratio; canvas.height = height * ratio;
      canvas.style.width = width + 'px'; canvas.style.height = height + 'px';
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      let seed = 421;
      const random = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
      stars = Array.from({length:Math.min(230, Math.floor(width * height / 5000))}, () => ({x:random()*width,y:random()*height,size:0.4+random()*1.05,alpha:0.2+random()*0.55,phase:random()*6.28}));
      if (reduced.matches) draw();
    };
    const motionChange = () => { cancelAnimationFrame(frame); resize(); draw(); };
    resize(); draw();
    window.addEventListener('resize', resize); reduced.addEventListener('change', motionChange);
    return () => { cancelAnimationFrame(frame); window.removeEventListener('resize', resize); reduced.removeEventListener('change', motionChange); };
  }, []);
  return <div className="cosmic-background" aria-hidden="true"><div className="cosmic-glow" /><canvas ref={ref} /></div>;
}
