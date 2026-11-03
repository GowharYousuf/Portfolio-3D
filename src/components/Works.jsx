import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion, useReducedMotion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import ProjectUniverse from "./ProjectUniverse";

const ProjectCard = ({ index, name, description, tags, image, source_code_link, live_demo_link, category, featured, reduceMotion, conceptVisual }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.35, delay: Math.min(index * 0.025, 0.25) }}
    className='h-full'
  >
    <Tilt
      tiltEnable={!reduceMotion}
      tiltReverse={false}
      tiltMaxAngleX={4}
      tiltMaxAngleY={4}
      scale={1.01}
      transitionSpeed={900}
      glareEnable={false}
      className='h-full bg-tertiary p-4 sm:p-5 rounded-2xl border border-white/10'
    >
      <div className='relative w-full h-[210px] overflow-hidden rounded-2xl bg-[#111321]'>
        {image ? (
          <img src={image} alt={`${name} — ${conceptVisual ? "illustrative concept preview" : "project preview"}`} loading='lazy' className='w-full h-full object-cover' />
        ) : (
          <div className='flex h-full flex-col justify-between bg-gradient-to-br from-[#282143] via-[#17182a] to-[#0d1020] p-5'>
            <span className='text-xs uppercase tracking-[0.2em] text-[#C5B2FF]'>{category || "Project"}</span>
            <p className='max-w-[18rem] text-2xl font-bold text-white'>{name}</p>
          </div>
        )}
        <span className='absolute right-3 top-3 rounded-full border border-white/20 bg-[#090b16]/90 px-3 py-1 text-xs text-white'>
          {featured ? "Featured" : category || "Project"}
        </span>
      </div>

      <div className='mt-5'>
        <h3 className='text-white font-bold text-xl'>{name}</h3>
        <p className='mt-2 text-[#D2D1DF] text-sm leading-6'>{description}</p>
      </div>

      <div className='mt-4 flex flex-wrap gap-2'>
        {tags.map((tag) => (
          <span key={`${name}-${tag}`} className='rounded-full border border-white/10 bg-primary px-3 py-1 text-xs text-[#E5DEFF]'>#{tag}</span>
        ))}
      </div>

      {(live_demo_link || source_code_link) && (
        <div className='mt-6 flex flex-wrap gap-x-5 gap-y-2'>
          {live_demo_link && <a href={live_demo_link} target='_blank' rel='noreferrer' className='text-sm font-semibold text-[#D7C8FF] hover:text-white'>Live demo ↗</a>}
          {source_code_link && <a href={source_code_link} target='_blank' rel='noreferrer' className='text-sm font-semibold text-[#D7C8FF] hover:text-white'>Source code ↗</a>}
        </div>
      )}
    </Tilt>
  </motion.div>
);

const Works = () => {
  const reduceMotion = useReducedMotion();
  const [showAll, setShowAll] = useState(false);
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");
  const filtered = projects.filter(project => {
    const matches = filter === "All" || (filter === "Web" && !project.tags.includes("React Native") && !project.tags.includes("Three.js")) || (filter === "Mobile" && project.tags.includes("React Native")) || (filter === "3D" && project.tags.includes("Three.js"));
    return matches && `${project.name} ${project.description} ${project.tags.join(" ")}`.toLowerCase().includes(query.toLowerCase());
  });
  const visibleProjects = showAll ? filtered : filtered.slice(0, 6);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Selected work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className='w-full'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-[#D2D1DF] text-base sm:text-[17px] max-w-3xl leading-7'
        >
          From full-stack products to earlier experiments, here are projects I’ve built across web, mobile, and 3D experiences.
        </motion.p>
      </div>

      <ProjectUniverse />
      <div className="project-toolbar" role="group" aria-label="Filter projects">
        {["All", "Web", "Mobile", "3D"].map(value => <button type="button" key={value} aria-pressed={filter === value} onClick={() => { setFilter(value); setShowAll(false); }}>{value}</button>)}
        <input type="search" aria-label="Search projects" placeholder="Search projects or technologies…" value={query} onChange={e => { setQuery(e.target.value); setShowAll(false); }} />
      </div>
      <p className="project-result-count" role="status">{filtered.length ? `Showing ${visibleProjects.length} of ${filtered.length} projects` : "No projects found. Try another search or filter."}</p>
      <div className='mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch'>
        {visibleProjects.map((project, index) => (
          <ProjectCard key={project.name} index={index} {...project} reduceMotion={reduceMotion} />
        ))}
      </div>

      {filtered.length > 6 && (
        <button
          type='button'
          aria-expanded={showAll}
          onClick={() => setShowAll((value) => !value)}
          className='mt-8 rounded-xl border border-[#A98AFF] px-5 py-3 text-white font-semibold transition-colors hover:bg-[#915EFF]/20'
        >
          {showAll ? "Show fewer projects" : `Show all ${filtered.length} projects`}
        </button>
      )}
    </>
  );
};

export default SectionWrapper(Works, "work");
