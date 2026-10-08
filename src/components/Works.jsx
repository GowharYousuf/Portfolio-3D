import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        tiltMaxAngleX={45}
        tiltMaxAngleY={45}
        scale={1}
        transitionSpeed={450}
        className='h-full bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full border border-white/5'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt={`${name} project preview`}
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <span className='rounded-full bg-black/70 px-3 py-1 text-xs text-white'>Featured project</span>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <span key={`${name}-${tag}`} className='rounded-full bg-primary px-3 py-1 text-xs text-[#dfd9ff]'>#{tag}</span>
          ))}
        </div>

        <div className='mt-6 flex gap-3'>
          {live_demo_link && <a href={live_demo_link} target='_blank' rel='noreferrer' className='text-sm font-semibold text-white hover:text-[#b99bff]'>Live app ↗</a>}
          <a href={source_code_link} target='_blank' rel='noreferrer' className='text-sm font-semibold text-white hover:text-[#b99bff]'>Source code ↗</a>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          A selection of web and mobile products I’ve built, from a full-stack team task manager to a cross-platform subscription app and an API-powered storefront.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
