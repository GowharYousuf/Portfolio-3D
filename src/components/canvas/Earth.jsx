import { Component, Suspense, useEffect, useRef, useState } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, Stars, useGLTF } from '@react-three/drei';
import { useReducedMotion } from 'framer-motion';
import CanvasLoader from '../Loader';

class GlobeBoundary extends Component {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? <div className="globe-fallback" aria-label="Globe illustration">🌐</div> : this.props.children; }
}
function Earth() {
  const earth = useGLTF('/planet/scene.gltf');
  const width = useThree(state => state.viewport.width);
  return <primitive object={earth.scene} scale={Math.min(2.5, width * 0.4)} />;
}
export default function EarthCanvas() {
  const host = useRef();
  const reduced = useReducedMotion();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { rootMargin: '200px' });
    observer.observe(host.current);
    return () => observer.disconnect();
  }, []);
  return <div ref={host} className="contact-globe" role="img" aria-label="A rotating Earth wrapped in pastel ribbons against a field of stars">
    {visible && <GlobeBoundary><Canvas frameloop="demand" dpr={[1, 1.5]} camera={{ fov:45, near:0.1, far:200, position:[-4,3,6] }} fallback={<div className="globe-fallback">🌐</div>}>
      <Stars radius={65} depth={30} count={1500} factor={2} saturation={0} fade speed={0} />
      <Suspense fallback={<CanvasLoader />}><Earth /></Suspense>
      <OrbitControls autoRotate={!reduced} autoRotateSpeed={0.6} enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
    </Canvas></GlobeBoundary>}
  </div>;
}
