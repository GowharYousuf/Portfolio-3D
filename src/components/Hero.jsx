import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] z-10 max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className='max-w-2xl lg:max-w-[52%] rounded-2xl lg:bg-primary/70 lg:p-5 lg:backdrop-blur-sm'>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Gowhar Yousuf</span>
          </h1>
          <p className={`${styles.heroSubText} mt-3 text-white-100 max-w-2xl`}>
            Full Stack Engineer <span className='text-[#915EFF]'>·</span> Web &amp; Mobile
          </p>
          <p className='mt-4 text-secondary text-base sm:text-lg max-w-xl leading-8'>
            I build accessible, production-ready web and mobile experiences for healthcare, ERP, and customer-facing products.
          </p>
          <div className='mt-7 flex flex-wrap gap-3'>
            <a href='#work' className='rounded-xl bg-[#915EFF] px-5 py-3 text-white font-semibold hover:bg-[#7b4be0] transition-colors'>View my work</a>
            <a href='https://www.linkedin.com/in/gowhar-yousuf-262594323' target='_blank' rel='noreferrer' className='rounded-xl border border-white/20 px-5 py-3 text-white font-semibold hover:bg-white/10 transition-colors'>LinkedIn ↗</a>
            <a href='https://github.com/GowharYousuf' target='_blank' rel='noreferrer' className='rounded-xl border border-white/20 px-5 py-3 text-white font-semibold hover:bg-white/10 transition-colors'>GitHub ↗</a>
          </div>
        </div>
      </div>

      <div className='absolute inset-y-0 right-0 hidden w-[54%] lg:block pointer-events-none'>
        <ComputersCanvas />
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
