import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const highlights = [
  { value: "3+ years", label: "building interfaces" },
  { value: "50+", label: "reusable components shipped" },
  { value: "20-40%", label: "measurable performance gains" },
];

const About = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>About me</p>
      <h2 className={styles.sectionHeadText}>Frontend, built for people.</h2>
    </motion.div>

    <motion.div
      variants={fadeIn("", "", 0.1, 1)}
      className='mt-6 grid lg:grid-cols-[1.35fr_0.65fr] gap-10 items-start'
    >
      <div>
        <p className='text-secondary text-[17px] leading-8 max-w-3xl'>
          I’m a frontend engineer in Bengaluru with 3+ years of experience building
          responsive web and mobile products with React, Next.js, TypeScript, and
          React Native. I focus on reusable UI architecture, accessible design,
          thoughtful API integration, and fast, dependable experiences.
        </p>
        <p className='mt-4 text-secondary text-[17px] leading-8 max-w-3xl'>
          I’ve worked across healthcare, ERP, and client-facing products, partnering
          with design, backend, and QA teams to turn complex workflows into clear
          interfaces. I’m also familiar with Python and backend API development.
        </p>
        <a
          href='mailto:gowharyousuf2@gmail.com'
          className='inline-flex mt-7 px-5 py-3 rounded-xl bg-tertiary text-white font-semibold hover:bg-[#292342] transition-colors'
        >
          Let’s talk <span aria-hidden='true' className='ml-2'>↗</span>
        </a>
      </div>

      <div className='grid gap-3'>
        {highlights.map(({ value, label }) => (
          <div key={label} className='rounded-2xl border border-white/10 bg-tertiary/70 p-5'>
            <p className='text-white text-2xl font-bold'>{value}</p>
            <p className='mt-1 text-secondary text-sm'>{label}</p>
          </div>
        ))}
      </div>
    </motion.div>
  </>
);

export default SectionWrapper(About, "about");
