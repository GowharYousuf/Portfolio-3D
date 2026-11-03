import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { loadWorkspace } from '../utils/workspace';
import Starfield from './Starfield';
import Spaceship from './Spaceship';

export default function Welcome({ onEnter, onQuickView }) {
  const [status, setStatus] = useState('loading');
  const [launching, setLaunching] = useState(false);
  const reduced = useReducedMotion();
  const enter = useRef();
  const launched = useRef(false);
  const timer = useRef();
  useEffect(() => {
    let mounted = true;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    enter.current?.focus();
    loadWorkspace().then(() => mounted && setStatus('ready'), () => mounted && setStatus('fallback'));
    return () => { mounted = false; clearTimeout(timer.current); document.body.style.overflow = previous; };
  }, []);
  const launch = () => {
    if (launched.current) return;
    launched.current = true;
    window.dispatchEvent(new CustomEvent('portfolio:launch', { detail: { reduced: Boolean(reduced) } }));
    setLaunching(true);
    timer.current = setTimeout(() => onEnter(true), reduced ? 450 : 3800);
  };
  return <div className={'welcome-screen spaceport ' + (launching ? 'is-launching' : '')} role="dialog" aria-modal="true" aria-labelledby="welcome-title" aria-describedby="welcome-description" aria-busy={launching} onKeyDown={e => {
    if(e.key === 'Tab') {
      const buttons=[...e.currentTarget.querySelectorAll('button')];
      const index=buttons.indexOf(document.activeElement);
      e.preventDefault(); buttons[(index+(e.shiftKey?-1:1)+buttons.length)%buttons.length]?.focus();
    }
    if(e.key === 'Escape' && launched.current) onEnter(true);
  }}>
    <Starfield /><div className="welcome-nebula" aria-hidden="true" />
    <div className="welcome-content">
      <p className="welcome-kicker">GOWHAR YOUSUF / A DIGITAL REALM</p>
      <div className="launch-pad" aria-hidden="true"><div className="launch-rings"/><div className="welcome-ship"><Spaceship /></div><div className="engine-glow"/></div>
      <p className="welcome-chapter">YOUR JOURNEY STARTS HERE</p>
      <h1 id="welcome-title">Welcome to<br /><em>my little universe.</em></h1>
      <p id="welcome-description">A place where code becomes craft,<br />and a little imagination changes everything.</p>
      <p className="welcome-status" role="status"><span />{launching ? 'Engines ignited. Beyond the clouds…' : status === 'loading' ? 'Preparing your spacecraft…' : 'Your spacecraft is ready for departure.'}</p>
      <button ref={enter} type="button" className="enter-world" aria-disabled={launching} onClick={launch}>{launching ? 'Launching…' : 'Enter the universe'} <span aria-hidden="true">↗</span></button>
      {!launching && <button type="button" className="welcome-quick" onClick={onQuickView}>Quick view & résumé ↗</button>}
      <p className="welcome-sound-note">✧ Launch with sound. Your next adventure awaits.</p>
    </div>
    <div className="launch-clouds" aria-hidden="true"><span/><span/><span/><span/><span/></div>
    <span className="welcome-coordinate" aria-hidden="true">01 — IMAGINATION, ENGINEERED</span>
  </div>;
}
