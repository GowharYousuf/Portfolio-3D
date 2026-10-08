import { motion } from "framer-motion";

import { education } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

const Education = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Academic background</p>
      <h2 className={styles.sectionHeadText}>Education.</h2>
    </motion.div>
    <div className='mt-8 grid md:grid-cols-2 gap-4'>
      {education.map((item, index) => (
        <motion.article
          key={item.degree}
          variants={fadeIn("up", "spring", index * 0.12, 0.55)}
          className='rounded-2xl border border-white/10 bg-tertiary/70 p-6'
        >
          <p className='text-sm text-[#b99bff]'>{item.date}</p>
          <h3 className='mt-3 text-white text-xl font-semibold'>{item.degree}</h3>
          <p className='mt-2 text-secondary'>{item.institution}</p>
        </motion.article>
      ))}
    </div>
  </>
);

export default SectionWrapper(Education, "education");
