import './Parallax.scss';
import { motion, useScroll, useTransform } from 'framer-motion';
import {useRef} from 'react';
const Parallax = ({ type }) => {

  const ref = useRef()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ['0%', '150%']);
  const yOpacity = useTransform(
    scrollYProgress,
    // Map scrollYProgress from these values:
    [0, .45],
    // Into these values:
    [1, 0]
  );

  return (
    <div
      className='parallax-container'
      ref={ref}
      style={{
        background:
          type === 'services'
            ? 'linear-gradient(180deg, var(--purple), var(--darker))'
            : 'linear-gradient(180deg, var(--purple), var(--dark-main))',
      }}
    >
      <motion.h1 style={{ y: yBackground, opacity: yOpacity }}>
        {type === 'services' ? 'Services We Provide' : 'See Our Work'}
      </motion.h1>
      <motion.div className='stars'></motion.div>
      <motion.div className='muppets-group'></motion.div>
    </div>
  );
};

export default Parallax;