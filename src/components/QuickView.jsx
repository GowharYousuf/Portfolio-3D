import { profile, resumeUrl } from '../constants/profile';
import { education, experiences, projects, skillGroups } from '../constants';
export default function QuickView({ onExplore }) {
  return <section className="quick-view" id="quick-view" aria-labelledby="quick-heading">
    <p className="eyebrow">QUICK VIEW / RÉSUMÉ HIGHLIGHTS</p><h1 id="quick-heading">{profile.name}</h1><p className="quick-role">{profile.role} · {profile.location}</p><p className="quick-summary">{profile.summary}</p>
    <div className="quick-actions"><a className="primary-link" href={resumeUrl} download>Download résumé ↓</a><a className="secondary-link" href="mailto:gowharyousuf2@gmail.com">Email Gowhar ↗</a><button className="secondary-link" type="button" onClick={onExplore}>Explore the universe ↗</button></div>
    <div className="quick-stats"><div><strong>50+</strong><span>Reusable components built</span></div><div><strong>40%</strong><span>Less UI development time at Mimsys</span></div><div><strong>3+ years</strong><span>Web & mobile interface experience</span></div></div>
    <h2>Experience</h2><div className="quick-jobs">{experiences.map(job=><article key={job.company_name}><div><h3>{job.title}</h3><p>{job.company_name}</p></div><time>{job.date}</time><ul>{job.points.map(point=><li key={point}>{point}</li>)}</ul></article>)}</div>
    <h2>Selected projects</h2><div className="quick-projects">{projects.filter(p=>p.featured).map(project=><article key={project.name}><h3>{project.name}</h3><p>{project.description}</p><p className="quick-tech">{project.tags.join(' · ')}</p><div>{project.live_demo_link&&<a href={project.live_demo_link} target="_blank" rel="noreferrer">Live app ↗</a>}<a href={project.source_code_link} target="_blank" rel="noreferrer">Source ↗</a></div></article>)}</div>
    <h2>Skills</h2><div className="quick-skills">{skillGroups.map(group=><p key={group.title}><strong>{group.title}</strong>{group.skills.join(' · ')}</p>)}</div>
    <h2>Education</h2><div className="quick-education">{education.map(item=><article key={item.degree}><h3>{item.degree}</h3><p>{item.institution} · {item.date}</p></article>)}</div>
    <p className="quick-contact"><a href="https://github.com/GowharYousuf" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/gowhar-yousuf-262594323" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="mailto:gowharyousuf2@gmail.com">gowharyousuf2@gmail.com ↗</a></p>
  </section>;
}
