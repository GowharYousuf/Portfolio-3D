import { MotionConfig } from 'framer-motion';
import { About, Contact, Education, Experience, Hero, Navbar, Tech, Works } from './components';
export default function App() {
  return <MotionConfig reducedMotion="user"><div className="relative z-0 bg-primary">
    <a className="skip-link" href="#main">Skip to content</a>
    <Navbar /><main id="main"><Hero /><About /><Experience /><Tech /><Works /><Education /><Contact /></main>
    <footer className="site-footer"><a href="#home" className="wordmark">g. <span>Gowhar Yousuf</span></a><p>Thoughtfully designed. Carefully engineered.</p><a href="#home">Back to top ↑</a></footer>
  </div></MotionConfig>;
}
