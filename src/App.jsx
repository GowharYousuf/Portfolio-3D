import { MotionConfig } from 'framer-motion';
import { useState } from 'react';
import { About, Contact, Education, Experience, Hero, Navbar, Tech, Works } from './components';
import MusicPlayer from './components/MusicPlayer';
import Welcome from './components/Welcome';
import Starfield from './components/Starfield';
import ShipScrollbar from './components/ShipScrollbar';
import MissionControl from './components/MissionControl';
import QuickView from './components/QuickView';
export default function App() {
  const [welcoming, setWelcoming] = useState(true);
  const [quickView, setQuickView] = useState(false);
  const changeView = value => {
    setQuickView(value);
    requestAnimationFrame(() => { window.scrollTo({top:0,behavior:'instant'}); document.querySelector('#main')?.focus({preventScroll:true}); });
  };
  const navigate = id => {
    setQuickView(false);
    requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({behavior:'smooth'}));
  };
  const enterWorld = sound => {
    window.dispatchEvent(new CustomEvent('portfolio:enter', { detail: { sound } }));
    setWelcoming(false);
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
      document.querySelector('#main')?.focus({ preventScroll: true });
    });
  };
  return <MotionConfig reducedMotion="user"><div className="relative z-0">
    <Starfield />
    {welcoming && <Welcome onEnter={enterWorld} />}
    <div inert={welcoming ? '' : undefined}><MusicPlayer /></div>
    <div className="site-shell" inert={welcoming ? '' : undefined}>
    {!welcoming && <ShipScrollbar />}
    {!welcoming && <MissionControl quickView={quickView} onQuickView={changeView} onNavigate={navigate} />}
    <a className="skip-link" href="#main">Skip to content</a>
    <Navbar onNavigate={navigate} /><main id="main" tabIndex={-1}><div hidden={!quickView}><QuickView onExplore={() => changeView(false)} /></div><div hidden={quickView}><Hero /><About /><Experience /><Tech /><Works /><Education /><Contact /></div></main>
    <footer className="site-footer"><a href="#home" className="wordmark" onClick={e => {e.preventDefault();navigate('home');}}>g. <span>Gowhar Yousuf</span></a><p>Thoughtfully designed. Carefully engineered.</p><a href="#main" onClick={e => {e.preventDefault();window.scrollTo({top:0,behavior:'smooth'});}}>Back to top ↑</a></footer>
    </div>
  </div></MotionConfig>;
}
