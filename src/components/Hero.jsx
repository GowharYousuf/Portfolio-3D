import { lazy, Suspense } from 'react';
import { loadWorkspace } from '../utils/workspace';
const InteractiveDesk = lazy(loadWorkspace);
export default function Hero() {
  return <section className="portfolio-hero" id="home">
    <div className="hero-copy">
      <p className="eyebrow"><span /> ENGINEERING MEETS IMAGINATION</p>
      <h1>Hi, I’m Gowhar.<br /><span>I build digital<br />experiences.</span></h1>
      <p className="hero-role">Full Stack Engineer <span> / </span> Web &amp; Mobile</p>
      <p className="hero-description">From complex workflows to intuitive interfaces. I build accessible, production-ready products with a thoughtful eye for detail.</p>
      <div className="hero-actions"><a className="primary-link" href="#work">Explore my work <span>↗</span></a><a className="secondary-link" href="#contact">Let’s talk <span>↗</span></a></div>
      <div className="hero-socials"><a href="https://github.com/GowharYousuf" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/gowhar-yousuf-262594323" target="_blank" rel="noreferrer">LinkedIn ↗</a><span>Bengaluru, India</span></div>
    </div>
    <Suspense fallback={<div className="scene-fallback">Loading workspace…</div>}><InteractiveDesk /></Suspense>
    <div className="hero-bottom"><a href="#about">↓ Scroll to discover</a><span>REACT · TYPESCRIPT · NEXT.JS · THREE.JS</span></div>
  </section>;
}
