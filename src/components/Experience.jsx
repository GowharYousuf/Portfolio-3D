import { useState } from 'react';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
function Experience() {
  const [selected,setSelected]=useState(0);
  const job=experiences[selected];
  return <><p className={styles.sectionSubText}>Where I’ve contributed</p><h2 className={styles.sectionHeadText}>Career constellation.</h2><p className="career-intro">Three chapters of building interfaces. Select a star to explore the work.</p>
    <div className="career-map" role="group" aria-label="Career milestones">{experiences.map((experience,i)=><button key={experience.company_name} type="button" aria-pressed={selected===i} onClick={()=>setSelected(i)}><span className="career-star" aria-hidden="true">✦</span><small>{experience.date}</small><strong>{experience.company_name}</strong><span>{experience.title}</span></button>)}</div>
    <article className="career-detail"><p className="eyebrow">CHAPTER 0{3-selected} / {job.date}</p><h3>{job.title}</h3><p className="career-company">{job.company_name} · Bengaluru, India</p><ul>{job.points.map(point=><li key={point}>{point}</li>)}</ul></article>
  </>;
}
export default SectionWrapper(Experience,'experience');
