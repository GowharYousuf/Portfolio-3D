import { useEffect, useRef, useState } from 'react';
import { navLinks } from '../constants';
import { resumeUrl } from '../constants/profile';
export default function MissionControl({ quickView, onQuickView, onNavigate }) {
  const [open,setOpen]=useState(false);
  const host=useRef(),toggle=useRef();
  useEffect(()=>{
    const dismiss=e=>{
      if(e.key==='Escape'&&open){setOpen(false);toggle.current?.focus();}
      if(e.type==='pointerdown'&&!host.current?.contains(e.target))setOpen(false);
    };
    document.addEventListener('keydown',dismiss);document.addEventListener('pointerdown',dismiss);
    return()=>{document.removeEventListener('keydown',dismiss);document.removeEventListener('pointerdown',dismiss);};
  },[open]);
  return <aside className="mission-control" ref={host}>
    {open&&<div id="mission-panel" className="mission-panel"><p className="eyebrow">MISSION CONTROL</p><h3>Where to next?</h3><nav aria-label="Mission destinations">{navLinks.map((link,i)=><a href={'#'+link.id} key={link.id} onClick={e=>{e.preventDefault();setOpen(false);onNavigate(link.id);}}><span>0{i+1}</span>{link.title}<span>↗</span></a>)}</nav><button type="button" className="mission-quick" onClick={()=>{onQuickView(!quickView);setOpen(false);}}>{quickView?'Return to space experience':'Quick view · résumé & highlights'} ↗</button><a className="mission-resume" href={resumeUrl} download>Download résumé ↓</a></div>}
    <button ref={toggle} type="button" className="mission-toggle" aria-expanded={open} aria-controls="mission-panel" onClick={()=>setOpen(v=>!v)}><span aria-hidden="true">⌘</span>{open?'Close controls':'Mission Control'}</button>
  </aside>;
}
