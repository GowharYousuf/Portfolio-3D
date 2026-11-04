import { useState } from 'react';
import { FaCode, FaDatabase, FaLaptopCode, FaScrewdriverWrench, FaUniversalAccess } from 'react-icons/fa6';
import { SectionWrapper } from '../hoc';
import { skillGroups } from '../constants';
import react from '../assets/tech/reactjs.png';
import typescript from '../assets/tech/typescript.png';
import javascript from '../assets/tech/javascript.png';
import tailwind from '../assets/tech/tailwind.png';
import html from '../assets/tech/html.png';
import css from '../assets/tech/css.png';
import git from '../assets/tech/git.png';
import docker from '../assets/tech/docker.png';
import mongo from '../assets/tech/mongodb.png';
import redux from '../assets/tech/redux.png';
const logos={'React.js':react,'React Native':react,TypeScript:typescript,'JavaScript (ES6+)':javascript,'Tailwind CSS':tailwind,HTML5:html,CSS3:css,Git:git,Docker:docker,MongoDB:mongo,'Redux Toolkit':redux};
const icons=[FaCode,FaLaptopCode,FaDatabase,FaScrewdriverWrench,FaUniversalAccess];
const descriptions={
  Languages:'The foundations behind structured, dependable interfaces.',
  Frontend:'Reusable components and accessible experiences across web and mobile.',
  'Backend & data':'APIs, authentication, and data behind connected products.',
  'Testing & tools':'A practical workflow for building, testing, and shipping.',
  Practices:'The engineering habits that keep interfaces maintainable and usable.',
};
const details={
  'React.js':['Reusable interface architecture','Used for reusable components, healthcare and ERP interfaces, Task Inventory, and Cric Face.','#work'],
  'Next.js':['Production web interfaces','Used at Mimsys for healthcare, ERP, and hospital insurance workflows.','#experience'],
  TypeScript:['Clear contracts across the UI','Used with React and Next.js components, dashboards, and Task Inventory.','#work'],
  'React Native':['Cross-platform mobile UI','Used with Expo and NativeWind to build Subscribly’s reusable mobile interface.','#work'],
  FastAPI:['Connected task workflows','Task Inventory uses a FastAPI REST backend with SQLAlchemy and PostgreSQL.','#work'],
  PostgreSQL:['Relational application data','Used in the Task Inventory backend alongside FastAPI and SQLAlchemy.','#work'],
  'Redux Toolkit':['Predictable application state','Used in healthcare interfaces and to optimize storefront state updates in Cric Face.','#work'],
  'Node.js':['Services behind clinical workflows','Used with Express.js for a hospital insurance platform at Mimsys.','#experience'],
  Clerk:['Persistent mobile authentication','Used in Subscribly for protected routes and persistent authentication sessions.','#work'],
  'Accessibility (WCAG)':['Interfaces people can use','Accessible, cross-browser appointment, medication, and patient-management interfaces are part of my healthcare work.','#experience'],
};
const focus=['React.js','Next.js','TypeScript','React Native'];
function Tech() {
  const [category,setCategory]=useState('Frontend');
  const [query,setQuery]=useState('');
  const [selected,setSelected]=useState('React.js');
  const all=skillGroups.flatMap(group=>group.skills.map(name=>({name,group:group.title})));
  const active=skillGroups.find(group=>group.title===category);
  const visible=(query?all:all.filter(skill=>skill.group===category)).filter(skill=>skill.name.toLowerCase().includes(query.trim().toLowerCase()));
  const chosen=all.find(skill=>skill.name===selected);
  const detail=details[selected] || [selected+' in my toolkit','Listed in my résumé under '+chosen.group.toLowerCase()+'. Explore my projects and experience to see the broader engineering work.','#work'];
  const chooseCategory=value=>{setCategory(value);setQuery('');setSelected(skillGroups.find(group=>group.title===value).skills[0]);};
  return <div className="skills-explorer">
    <div className="skills-heading"><div><p className="eyebrow">THE ENGINEERING TOOLKIT</p><h2>Skills that connect<br /><span>ideas to interfaces.</span></h2></div><p>Explore the technologies and practices behind my web and mobile work.</p></div>
    <div className="core-stack" role="group" aria-label="Core technologies">{focus.map((name,i)=><button key={name} type="button" aria-pressed={selected===name} onClick={()=>{setCategory('Frontend');setQuery('');setSelected(name);}}><span className="core-number">0{i+1}</span><span className="core-logo">{logos[name]?<img src={logos[name]} alt=""/>:<b>N</b>}</span><strong>{name}</strong><small>{['COMPONENT ARCHITECTURE','WEB EXPERIENCES','TYPED INTERFACES','MOBILE PRODUCTS'][i]}</small><span className="core-arrow">↗</span></button>)}</div>
    <div className="skills-workbench">
      <div className="skill-categories" role="group" aria-label="Skill categories">{skillGroups.map((group,i)=>{const Icon=icons[i];return <button key={group.title} type="button" aria-pressed={category===group.title&&!query} onClick={()=>chooseCategory(group.title)}><Icon aria-hidden="true"/><span>{group.title}</span><small>{group.skills.length}</small></button>;})}</div>
      <div className="skill-browser"><div className="skill-browser-heading"><div><p>{query?'Search results':category}</p><span>{query?'Across all résumé skill groups':descriptions[category]}</span></div><label className="skill-search"><span aria-hidden="true">⌕</span><input type="search" aria-label="Search skills" placeholder="Search the toolkit…" value={query} onChange={e=>setQuery(e.target.value)}/></label></div>
        <p className="skills-count" role="status">{visible.length} {visible.length===1?'skill':'skills'} {query?'found':'in this toolkit'}</p>
        <div className="skill-tiles">{visible.map(skill=><button type="button" key={skill.name} aria-pressed={selected===skill.name} onClick={()=>setSelected(skill.name)}><span className="skill-tile-icon">{logos[skill.name]?<img src={logos[skill.name]} alt=""/>:<b>{skill.name.replace(/[^a-zA-Z]/g,'').slice(0,2)}</b>}</span><span>{skill.name}</span><small>↗</small></button>)}</div>
        {!visible.length&&<div className="skill-empty"><p>No matching skills.</p><button type="button" onClick={()=>setQuery('')}>Clear search ↺</button></div>}
        <div className="skill-detail" aria-live="polite"><div><p className="eyebrow">{selected} / IN CONTEXT</p><h3>{detail[0]}</h3><p>{detail[1]}</p></div><a href={detail[2]}>See the work <span>↗</span></a></div>
      </div>
    </div>
  </div>;
}
export default SectionWrapper(Tech,'skills');
