import { useEffect, useRef, useState } from 'react';
import { navLinks } from '../constants';
export default function Navbar({ onNavigate }) {
  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);
  const nav = useRef();
  const toggle = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); }), { rootMargin: '-15% 0px -55% 0px' });
    document.querySelectorAll('main section[id]').forEach(section => observer.observe(section));
    const dismiss = event => {
      if (event.key === 'Escape' && toggle.current?.getAttribute('aria-expanded') === 'true') { setOpen(false); toggle.current?.focus(); }
      if (event.type === 'pointerdown' && !nav.current?.contains(event.target)) setOpen(false);
    };
    document.addEventListener('keydown', dismiss);
    document.addEventListener('pointerdown', dismiss);
    return () => { observer.disconnect(); document.removeEventListener('keydown', dismiss); document.removeEventListener('pointerdown', dismiss); };
  }, []);
  return <header className="site-header"><nav ref={nav} className="site-nav" aria-label="Main navigation">
    <a href="#home" className="wordmark" onClick={e => {setOpen(false);if(onNavigate){e.preventDefault();onNavigate('home');}}}><span>g.</span> Gowhar</a>
    <button ref={toggle} className="menu-toggle" type="button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="main-menu" onClick={() => setOpen(v => !v)}>{open ? 'Close ✕' : 'Menu ☰'}</button>
    <ul id="main-menu" className={`nav-links ${open ? 'is-open' : ''}`}>{navLinks.map(link => <li key={link.id}><a href={`#${link.id}`} aria-current={active === link.id ? 'location' : undefined} onClick={e => {setOpen(false);if(onNavigate){e.preventDefault();onNavigate(link.id);}}}>{link.title}</a></li>)}</ul>
    <a href="mailto:gowharyousuf2@gmail.com" className="nav-contact">Get in touch ↗</a>
  </nav></header>;
}
