import scss from './Hero.module.scss';
import { motion } from 'framer-motion';

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      staggerChildren: 0.1,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: '-450%',
    transition: {
      duration: 80,
      repeat: Infinity,
      repeatType: 'mirror',
    },
  },
};

const Hero = () => {
  return (
    <div className={scss.hero}>
      <div className={scss.wrapper}>
        <motion.div
          variants={textVariants}
          className={scss.textContainer}
          initial='initial'
          animate='animate'
        >
          <motion.h2 variants={textVariants}>BERNIE JANUARY JR.</motion.h2>
          <motion.h1 variants={textVariants}>
            Designer + Full Stack Developer
          </motion.h1>
          <div className={scss.buttonContainer}>
            <motion.button
              variants={textVariants}
              whileHover={{ backgroundColor: 'white', color: 'var(--purple)' }}
              whileTap={{ scale: 0.95 }}
            >
              See Latest Works
            </motion.button>
            <motion.button
              variants={textVariants}
              whileHover={{ backgroundColor: 'white', color: 'var(--purple)' }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </motion.button>
          </div>
        </motion.div>
        <motion.div
          className={scss.sliderContainer}
          variants={sliderVariants}
          initial='initial'
          animate='animate'
        >
          React Adobe Webflow Figma JavaScript Illustration Motion Graphics
        </motion.div>
        <div className={scss.imageContainer}>
          <img
            src='./src/assets/ernie-muppet.png'
            alt='ernie-muppet'
            className='hero-img'
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
