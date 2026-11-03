import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { projects } from '../constants';
import { projectStories } from '../constants/profile';
import ProjectDemo from './ProjectDemo';
const ProjectPlanets=lazy(()=>import('./canvas/ProjectPlanets'));
export default function ProjectUniverse() {
  const [selected,setSelected]=useState(0);
  const [near,setNear]=useState(false);
  const [discovered,setDiscovered]=useState(false);
  const host=useRef();
  useEffect(()=>{const observer=new IntersectionObserver(([entry])=>setNear(entry.isIntersecting),{rootMargin:'150px'});observer.observe(host.current);return()=>observer.disconnect();},[]);
  const story=projectStories[selected],project=projects.find(p=>p.name===story.name);
  return <section className="project-universe" ref={host} aria-labelledby="universe-heading">
    <div className="universe-topline"><p className="eyebrow">THREE DESTINATIONS. REAL WORK.</p><button type="button" className="satellite-discovery" aria-label="Investigate the satellite" aria-expanded={discovered} onClick={()=>setDiscovered(v=>!v)}>✧<span>{discovered?'Discovery 1 / 1':'Unknown signal'}</span></button></div>
    <h3 id="universe-heading">Explore my project universe.</h3><p className="universe-intro">Choose a planet. Follow the spacecraft. Discover what I built.</p>
    {discovered&&<div className="discovery-note" role="status">Signal decoded: I’m pursuing a Master of Computer Applications at Chandigarh University, Aug 2025–Aug 2027.</div>}
    <div className="planet-canvas" role="img" aria-label="Three project planets. Use the destination buttons below to select a project.">{near&&<Suspense fallback={<p className="planet-fallback">Charting the project orbits…</p>}><ProjectPlanets selected={selected} onSelect={setSelected}/></Suspense>}</div>
    <div className="planet-destinations" role="group" aria-label="Project destinations">{projectStories.map((item,i)=><button key={item.name} type="button" aria-pressed={selected===i} onClick={()=>setSelected(i)} style={{'--planet-color':item.color}}><span>{item.orbit}</span><strong>{item.name}</strong></button>)}</div>
    <article className="project-story" style={{'--planet-color':story.color}}>
      <div className="story-intro"><img src={project.image} alt={project.name+' illustrative project preview'} loading="lazy"/><div><p className="eyebrow">{story.orbit}</p><h4>{story.name}</h4><p>{story.purpose}</p><div className="story-tags">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div><div className="story-links">{project.live_demo_link&&<a href={project.live_demo_link} target="_blank" rel="noreferrer">Live app ↗</a>}<a href={project.source_code_link} target="_blank" rel="noreferrer">Source code ↗</a></div></div></div>
      <h5 className="story-subheading">What I built</h5><ul className="story-highlights">{story.highlights.map(point=><li key={point}>{point}</li>)}</ul>
      <ProjectDemo key={selected} index={selected}/>
    </article>
  </section>;
}
