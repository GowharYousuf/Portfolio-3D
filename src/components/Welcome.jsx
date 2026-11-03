import { useEffect, useRef, useState } from 'react';
import { loadWorkspace } from '../utils/workspace';
import Starfield from './Starfield';

export default function Welcome({ onEnter }) {
  const [status, setStatus] = useState('loading');
  const enter = useRef();
  useEffect(() => {
    let mounted = true;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    enter.current?.focus();
    loadWorkspace().then(() => mounted && setStatus('ready'), () => mounted && setStatus('fallback'));
    return () => { mounted = false; document.body.style.overflow = previous; };
  }, []);
  const focusLoop = event => {
    if (event.key !== 'Tab') return;
    const buttons = event.currentTarget.querySelectorAll('button');
    if (event.shiftKey && document.activeElement === buttons[0]) { event.preventDefault(); buttons[1].focus(); }
    else if (!event.shiftKey && document.activeElement === buttons[1]) { event.preventDefault(); buttons[0].focus(); }
  };
  return <div className="welcome-screen" role="dialog" aria-modal="true" aria-labelledby="welcome-title" aria-describedby="welcome-description" onKeyDown={focusLoop}>
    <Starfield />
    <div className="welcome-nebula" aria-hidden="true" />
    <div className="welcome-content">
      <p className="welcome-kicker">GOWHAR YOUSUF / A DIGITAL REALM</p>
      <div className="portal" aria-hidden="true"><span /><span /><span /><i>✦</i></div>
      <p className="welcome-chapter">YOUR JOURNEY STARTS HERE</p>
      <h1 id="welcome-title">Welcome to<br /><em>my little universe.</em></h1>
      <p id="welcome-description">A place where code becomes craft,<br />and a little imagination changes everything.</p>
      <p className="welcome-status" role="status"><span />{status === 'loading' ? 'Summoning the 3D workspace…' : status === 'ready' ? 'The portal is ready. Step inside.' : 'The world is ready. 3D will load as you explore.'}</p>
      <button ref={enter} type="button" className="enter-world" onClick={() => onEnter(true)}>Enter the universe <span aria-hidden="true">↗</span></button>
      <button type="button" className="enter-quiet" onClick={() => onEnter(false)}>Enter without sound</button>
      <p className="welcome-sound-note">✧ Ambient music begins as you enter. Sound controls are always nearby.</p>
    </div>
    <span className="welcome-coordinate" aria-hidden="true">01 — IMAGINATION, ENGINEERED</span>
  </div>;
}
