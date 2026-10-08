import { motion } from "framer-motion";
import {
  FaCode,
  FaDatabase,
  FaLaptopCode,
  FaScrewdriverWrench,
  FaUniversalAccess,
} from "react-icons/fa6";

import { SectionWrapper } from "../hoc";
import { skillGroups } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import {
  css,
  docker,
  git,
  github,
  html,
  javascript,
  mongodb,
  reactjs,
  redux,
  tailwind,
  typescript,
} from "../assets";

const skillLogos = {
  "JavaScript (ES6+)": javascript,
  TypeScript: typescript,
  HTML5: html,
  CSS3: css,
  "React.js": reactjs,
  "React Native": reactjs,
  "Redux Toolkit": redux,
  "Tailwind CSS": tailwind,
  MongoDB: mongodb,
  Git: git,
  GitHub: github,
  Docker: docker,
};

const categoryIcons = {
  Languages: FaCode,
  Frontend: FaLaptopCode,
  "Backend & data": FaDatabase,
  "Testing & tools": FaScrewdriverWrench,
  Practices: FaUniversalAccess,
};

const Tech = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>What I work with</p>
      <h2 className={styles.sectionHeadText}>Skills &amp; tools.</h2>
    </motion.div>

    <div className='mt-8 grid md:grid-cols-2 xl:grid-cols-3 gap-4'>
      {skillGroups.map((group, index) => {
        const CategoryIcon = categoryIcons[group.title];

        return (
          <motion.section
            key={group.title}
            variants={fadeIn("up", "spring", index * 0.12, 0.55)}
            className='rounded-2xl border border-[#39344f] bg-[#121322] p-5 sm:p-6'
          >
            <h3 className='flex items-center gap-3 text-white font-semibold text-lg'>
              <span className='flex h-9 w-9 items-center justify-center rounded-xl bg-[#915EFF]/20 text-[#C5AEFF]'>
                <CategoryIcon size={17} aria-hidden='true' />
              </span>
              {group.title}
            </h3>
            <div className='mt-4 flex flex-wrap gap-2'>
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className='inline-flex items-center gap-2 rounded-xl border border-white/15 bg-[#090B16] px-3 py-2 text-sm text-[#F0EDFA]'
                >
                  <span className='flex h-5 w-5 shrink-0 items-center justify-center'>
                    {skillLogos[skill] ? (
                      <img src={skillLogos[skill]} alt='' aria-hidden='true' className='h-[18px] w-[18px] object-contain' />
                    ) : (
                      <CategoryIcon size={15} aria-hidden='true' className='text-[#B99BFF]' />
                    )}
                  </span>
                  <span>{skill}</span>
                </span>
              ))}
            </div>
          </motion.section>
        );
      })}
    </div>
  </>
);

export default SectionWrapper(Tech, "skills");
