import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { loadWorkspace } from '../utils/workspace';
import Starfield from './Starfield';
import Spaceship from './Spaceship';

export default function Welcome({ onEnter }) {
  const [status, setStatus] = useState('loading');
  const [launching, setLaunching] = useState(false);
  const reduced = useReducedMotion();
  const enterRef = useRef(onEnter);
  const reducedRef = useRef(reduced);
  enterRef.current = onEnter;
  reducedRef.current = reduced;
  useEffect(() => {
    let mounted = true, arrival;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    loadWorkspace().then(() => mounted && setStatus('ready'), () => mounted && setStatus('fallback'));
    const countdown = setTimeout(() => {
      if (!mounted) return;
      window.dispatchEvent(new CustomEvent('portfolio:launch', { detail: { reduced: Boolean(reducedRef.current) } }));
      setLaunching(true);
      arrival = setTimeout(() => enterRef.current(true), reducedRef.current ? 450 : 3800);
    }, 1000);
    return () => { mounted = false; clearTimeout(countdown); clearTimeout(arrival); document.body.style.overflow = previous; };
  }, []);
  return <div className={'welcome-screen spaceport ' + (launching ? 'is-launching' : '')} role="dialog" aria-modal="true" aria-labelledby="welcome-title" aria-describedby="welcome-description" aria-busy="true">
    <Starfield /><div className="welcome-nebula" aria-hidden="true" />
    <div className="welcome-content">
      <p className="welcome-kicker">GOWHAR YOUSUF / A DIGITAL REALM</p>
      <div className="launch-pad" aria-hidden="true"><div className="launch-rings"/><div className="welcome-ship"><Spaceship /></div><div className="engine-glow"/></div>
      <p className="welcome-chapter">YOUR JOURNEY STARTS HERE</p>
      <h1 id="welcome-title">Welcome to<br /><em>my little universe.</em></h1>
      <p id="welcome-description">A place where code becomes craft,<br />and a little imagination changes everything.</p>
      <p className="welcome-status" role="status"><span />{launching ? 'Engines ignited. Beyond the clouds…' : 'Automatic departure in 1 second…'}</p>
      <div className="launch-countdown" aria-hidden="true"><span /></div>
      <p className="welcome-sound-note">{status === 'loading' ? 'Preparing the workspace as your journey begins.' : 'Your next adventure awaits.'}</p>
    </div>
    <div className="launch-clouds" aria-hidden="true"><span/><span/><span/><span/><span/></div>
    <span className="welcome-coordinate" aria-hidden="true">01 — IMAGINATION, ENGINEERED</span>
  </div>;
}
