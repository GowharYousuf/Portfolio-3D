import { MotionConfig } from 'framer-motion';
import { useState } from 'react';
import { About, Contact, Education, Experience, Hero, Navbar, Tech, Works } from './components';
import MusicPlayer from './components/MusicPlayer';
import Welcome from './components/Welcome';
import Starfield from './components/Starfield';
export default function App() {
  const [welcoming, setWelcoming] = useState(true);
  const enterWorld = sound => {
    window.dispatchEvent(new CustomEvent('portfolio:enter', { detail: { sound } }));
    setWelcoming(false);
    requestAnimationFrame(() => document.querySelector('#main')?.focus({ preventScroll: true }));
  };
  return <MotionConfig reducedMotion="user"><div className="relative z-0">
    <Starfield />
    {welcoming && <Welcome onEnter={enterWorld} />}
    <div inert={welcoming ? '' : undefined}><MusicPlayer /></div>
    <div className="site-shell" inert={welcoming ? '' : undefined}>
    <a className="skip-link" href="#main">Skip to content</a>
    <Navbar /><main id="main" tabIndex={-1}><Hero /><About /><Experience /><Tech /><Works /><Education /><Contact /></main>
    <footer className="site-footer"><a href="#home" className="wordmark">g. <span>Gowhar Yousuf</span></a><p>Thoughtfully designed. Carefully engineered.</p><a href="#home">Back to top ↑</a></footer>
    </div>
  </div></MotionConfig>;
}
