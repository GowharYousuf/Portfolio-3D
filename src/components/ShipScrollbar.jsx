import { useEffect, useRef, useState } from 'react';
import Spaceship from './Spaceship';

export default function ShipScrollbar() {
  const rail = useRef();
  const dragging = useRef(false);
  const offset = useRef(24);
  const [progress, setProgress] = useState(0);
  const [available, setAvailable] = useState(false);
  useEffect(() => {
    const update = () => {
      const distance = document.documentElement.scrollHeight - innerHeight;
      setAvailable(distance > 1);
      setProgress(distance > 0 ? Math.min(1, Math.max(0, scrollY / distance)) : 0);
    };
    const observer = new ResizeObserver(update);
    observer.observe(document.body);
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
    return () => { observer.disconnect(); window.removeEventListener('scroll', update); window.removeEventListener('resize', update); };
  }, []);
  const move = y => {
    const bounds = rail.current.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (y - bounds.top - offset.current) / (bounds.height - 48)));
    window.scrollTo({ top: ratio * (document.documentElement.scrollHeight - innerHeight), behavior:'instant' });
  };
  return <div ref={rail} className="ship-scrollbar" role="scrollbar" aria-label="Spaceship page scroll" aria-controls="main" aria-orientation="vertical" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(progress * 100)} aria-valuetext={Math.round(progress * 100) + '% through the universe'} tabIndex={available ? 0 : -1} style={{visibility:available ? 'visible' : 'hidden'}} onPointerDown={e => {
    if(e.button !== 0) return;
    const ship = e.currentTarget.querySelector('.scroll-ship').getBoundingClientRect();
    offset.current = e.clientY >= ship.top && e.clientY <= ship.bottom ? e.clientY - ship.top : 24;
    dragging.current = true; e.currentTarget.setPointerCapture(e.pointerId); e.currentTarget.focus(); move(e.clientY);
  }} onPointerMove={e => {if(dragging.current) move(e.clientY);}} onPointerUp={e => {dragging.current = false; e.currentTarget.releasePointerCapture(e.pointerId);}} onPointerCancel={() => {dragging.current = false;}} onKeyDown={e => {
    const steps={ArrowDown:80,ArrowUp:-80,PageDown:innerHeight*.8,PageUp:-innerHeight*.8,' ':innerHeight*.8};
    if(e.key === 'Home' || e.key === 'End') { e.preventDefault(); window.scrollTo({top:e.key === 'Home' ? 0 : document.documentElement.scrollHeight,behavior:'instant'}); }
    else if(e.key in steps) { e.preventDefault(); window.scrollBy({top:steps[e.key],behavior:'instant'}); }
  }}>
    <span className="ship-scroll-track" aria-hidden="true"/><span className="ship-scroll-progress" style={{height:progress*100+'%'}} aria-hidden="true"/>
    <span className="scroll-ship" style={{top:'calc(' + progress*100 + '% - ' + progress*48 + 'px)'}}><Spaceship /></span>
  </div>;
}
