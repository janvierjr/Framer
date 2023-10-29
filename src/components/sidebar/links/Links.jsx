import { motion } from 'framer-motion';

const variants = {
  open: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
  close: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      stiffness: 150,
      damping: 50,
    },
  },
  close: {
    y: 40,
    opacity: 0, 
  },
};

const Links = ({ open, setOpen }) => {
  const items = ['Home', 'Services', 'Portfolio', 'Contact'];
  return (
    <motion.div
      className='links-container'
      variants={variants}
      animate={open ? 'open' : 'close'}
    >
      {items.map((item, index) => {
        return (
          <motion.a
            key={index}
            href={`#${item}`}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: .95 }}
            onClick={prev => setOpen(!prev)}
          >
            {item}
          </motion.a>
        );
      })}
    </motion.div>
  );
};

export default Links;
