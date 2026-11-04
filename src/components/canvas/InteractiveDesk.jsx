import { Component, useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, RoundedBox } from '@react-three/drei';

class SceneBoundary extends Component {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? <div className="scene-fallback">&lt; / &gt;<p>Ideas into interfaces.</p></div> : this.props.children; }
}
function Workstation({ accent, moving }) {
  const group = useRef();
  useFrame(({ clock, pointer }) => {
    if (!moving) return;
    group.current.position.y = Math.sin(clock.elapsedTime * 0.8) * 0.06;
    group.current.rotation.z = pointer.x * 0.025;
  });
  return <group ref={group} rotation={[0, -0.25, 0]}>
    <RoundedBox args={[4.2, 0.12, 2.7]} radius={0.08} position={[0, -1, 0.35]}><meshStandardMaterial color="#272436" metalness={0.7} roughness={0.3} /></RoundedBox>
    <RoundedBox args={[1.3, 0.015, 0.65]} radius={0.04} position={[0, -0.928, 1.03]}><meshStandardMaterial color="#403b56" /></RoundedBox>
    {Array.from({ length: 42 }, (_, i) => <mesh key={i} position={[(i % 14 - 6.5) * 0.25, -0.925, -0.35 + Math.floor(i / 14) * 0.22]}><boxGeometry args={[0.19, 0.025, 0.14]} /><meshStandardMaterial color={i % 7 === 0 ? accent : '#545064'} emissive={accent} emissiveIntensity={i % 7 === 0 ? 0.25 : 0.02} /></mesh>)}
    <group position={[0, 0.45, -0.87]} rotation={[-0.12, 0, 0]}>
      <RoundedBox args={[4.2, 2.75, 0.14]} radius={0.1}><meshStandardMaterial color="#292536" metalness={0.6} roughness={0.3} /></RoundedBox>
      <mesh position={[0, 0, 0.078]}><planeGeometry args={[3.9, 2.43]} /><meshBasicMaterial color="#0c0e1b" /></mesh>
      {[0, 1, 2].map(i => <mesh key={i} position={[-1.7 + i * 0.16, 1.04, 0.09]}><circleGeometry args={[0.04, 16]} /><meshBasicMaterial color={['#ff6e91', '#ffd37c', '#70e1c5'][i]} /></mesh>)}
      {Array.from({ length: 10 }, (_, i) => <mesh key={i} position={[-0.35 + (i % 3) * 0.12, 0.7 - i * 0.17, 0.09]}><planeGeometry args={[1.3 + (i % 4) * 0.3, 0.045]} /><meshBasicMaterial color={i % 3 === 0 ? accent : '#78748e'} /></mesh>)}
      <mesh position={[-1.65, -0.99, 0.09]}><planeGeometry args={[0.12, 0.07]} /><meshBasicMaterial color={accent} /></mesh>
    </group>
    <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -1.2, 0]}><torusGeometry args={[3.1, 0.012, 12, 100]} /><meshBasicMaterial color={accent} transparent opacity={0.5} /></mesh>
    {[-1, 1].map(side => <mesh key={side} position={[side * 2.7, side * 0.65, -0.3]} rotation={[0.4, 0.6, 0.3]}><octahedronGeometry args={[0.22]} /><meshStandardMaterial color={accent} wireframe /></mesh>)}
  </group>;
}
export default function InteractiveDesk() {
  const host = useRef();
  const controls = useRef();
  const [visible, setVisible] = useState(true);
  const [reduced, setReduced] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [rotating, setRotating] = useState(true);
  const [color, setColor] = useState('#a78bfa');
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(query.matches);
    query.addEventListener('change', update);
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    observer.observe(host.current);
    return () => { query.removeEventListener('change', update); observer.disconnect(); };
  }, []);
  return <div className="interactive-desk" ref={host}>
    <div className="scene-topline"><span className="live-dot" /> INTERACTIVE WORKSPACE <span>BUILT WITH THREE.JS</span></div>
    <div className="desk-canvas" role="img" aria-label="Interactive 3D laptop. Drag horizontally to rotate; controls below pause, change lighting, or reset the view.">
      <SceneBoundary><Canvas frameloop={visible ? 'demand' : 'never'} dpr={[1, 1.5]} camera={{ position: [5, 3.2, 7.8], fov: 42 }} gl={{ antialias: true }} fallback={<div className="scene-fallback">&lt; / &gt;<p>Ideas into interfaces.</p></div>}>
        <ambientLight intensity={0.7} /><directionalLight position={[4, 6, 5]} intensity={1.4} /><pointLight position={[-3, 2, 2]} color={color} intensity={2} />
        <Workstation accent={color} moving={visible && rotating && !reduced} />
        <OrbitControls ref={controls} autoRotate={rotating && !reduced} autoRotateSpeed={0.65} enablePan={false} enableZoom={false} minPolarAngle={0.55} maxPolarAngle={1.5} />
      </Canvas></SceneBoundary>
    </div>
    <div className="scene-controls">
      <span className="drag-hint">↔ Drag to explore</span>
      <div className="scene-swatches">{['#a78bfa', '#5eead4', '#fb9d77'].map((c, i) => <button type="button" key={c} aria-label={['Violet lighting', 'Mint lighting', 'Peach lighting'][i]} aria-pressed={color === c} onClick={() => setColor(c)} style={{ '--swatch': c }} />)}</div>
      <button type="button" onClick={() => setRotating(v => !v)} aria-pressed={!rotating}>{rotating ? 'Pause' : 'Play'}</button>
      <button type="button" onClick={() => {setColor('#a78bfa');setRotating(true);controls.current?.reset();}}>Reset ↺</button>
    </div>
  </div>;
}

