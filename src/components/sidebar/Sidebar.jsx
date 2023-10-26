import { useState } from 'react';
import './Sidebar.scss';
import ToggleButton from './toggleButton/ToggleButton';
import Links from './links/Links';
import { motion } from 'framer-motion';

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const variants = {
    open: {
      clipPath: 'circle(1200px at 50px 50px',
      transition: {
        delay: 0.2,
        type: 'spring',
        stiffness: 70,
        damping: 30,
      },
    },
    closed: {
      clipPath: 'circle(30px at 50px 50px',
      transition: {
        delay: 0.2,
        type: 'spring',
        stiffness: 350,
        damping: 60,
      },
    },
  };

  return (
    <motion.div
      className='sidebar-wrapper'
      animate={ open ? 'open' : 'closed'}
    >
      <motion.div
        className='sidebar-bg'
        variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
}

export default Sidebar;
