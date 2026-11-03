import { Component, useLayoutEffect, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useReducedMotion } from 'framer-motion';
const positions=[[-3.2,0,0],[0,0.4,-0.6],[3.2,0,0]];
const colors=['#b7a0ff','#7de0c8','#f5b18c'];
function Scene({selected,onSelect,reduced}) {
  const ship=useRef();
  const {camera,size}=useThree();
  useLayoutEffect(()=>{
    const span=Math.max(3.6,10.8/(size.width/size.height));
    camera.fov=2*Math.atan(span/(2*camera.position.length()))*180/Math.PI;
    camera.lookAt(0,.3,0);camera.updateProjectionMatrix();
  },[camera,size.width,size.height]);
  useFrame((state,delta)=>{
    const target=positions[selected];
    if(ship.current){const factor=reduced?1:1-Math.exp(-delta*3);ship.current.position.x+=(target[0]-ship.current.position.x)*factor;ship.current.position.y+=((target[1]+1.3)-ship.current.position.y)*factor;}
  });
  return <><ambientLight intensity={0.9}/><directionalLight position={[-3,5,5]} intensity={1.7}/><pointLight position={[0,1,5]} intensity={1.2} color="#c2adff"/>
    {positions.map((position,i)=><group key={i} position={position} onClick={()=>onSelect(i)} onPointerOver={e=>{e.stopPropagation();}}><mesh><sphereGeometry args={[i===1?.7:.85,40,32]}/><meshStandardMaterial color={colors[i]} metalness={.35} roughness={.45} emissive={colors[i]} emissiveIntensity={selected===i?.23:.02}/></mesh><mesh rotation={[1.1,.3,i*.4]}><torusGeometry args={[1.2,.025,12,90]}/><meshStandardMaterial color={colors[i]} transparent opacity={selected===i?.85:.25}/></mesh><mesh rotation={[-Math.PI/2,0,0]} position={[0,-1.1,0]}><ringGeometry args={[.1,.15,32]}/><meshBasicMaterial color={colors[i]}/></mesh></group>)}
    <group ref={ship} position={[-3.2,1.7,0]} rotation={[0,0,-.3]}><mesh rotation={[0,0,Math.PI]}><coneGeometry args={[.11,.45,10]}/><meshStandardMaterial color="#e7dcff" metalness={.6} roughness={.3}/></mesh><mesh position={[0,.3,0]}><coneGeometry args={[.07,.3,10]}/><meshBasicMaterial color="#a7e7ff" transparent opacity={.7}/></mesh></group>
  </>;
}
class SceneBoundary extends Component {
  state={failed:false};
  static getDerivedStateFromError(){return {failed:true};}
  render(){return this.state.failed?<p className="planet-fallback">Choose a destination below to explore the projects.</p>:this.props.children;}
}
export default function ProjectPlanets({selected,onSelect}) {
  const reduced=useReducedMotion();
  return <SceneBoundary><Canvas dpr={[1,1.4]} camera={{position:[0,3,10.5],fov:48}} fallback={<p className="planet-fallback">Choose a project destination below.</p>}><Scene selected={selected} onSelect={onSelect} reduced={reduced}/></Canvas></SceneBoundary>;
}
