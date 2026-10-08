import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { skillGroups } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>What I work with</p>
      <h2 className={styles.sectionHeadText}>Skills &amp; tools.</h2>
    </motion.div>

    <div className='mt-8 grid md:grid-cols-2 xl:grid-cols-3 gap-4'>
      {skillGroups.map((group, index) => (
        <motion.section
          key={group.title}
          variants={fadeIn("up", "spring", index * 0.12, 0.55)}
          className='rounded-2xl border border-white/10 bg-tertiary/70 p-5 sm:p-6'
        >
          <h3 className='text-white font-semibold text-lg'>{group.title}</h3>
          <div className='mt-4 flex flex-wrap gap-2'>
            {group.skills.map((skill) => (
              <span key={skill} className='rounded-full border border-white/10 bg-primary/70 px-3 py-1.5 text-sm text-secondary'>
                {skill}
              </span>
            ))}
          </div>
        </motion.section>
      ))}
    </div>
  </>
);

export default SectionWrapper(Tech, "skills");
