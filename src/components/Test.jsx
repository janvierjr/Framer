import { motion, AnimatePresence } from 'framer-motion';

const Test = () => {
  return (
    <AnimatePresence>
      <motion.div
        className='box'
        initial={{ opacity: 0.2 }}
        transition={{ ease: 'easeInOut', duration: 3 }}
        whileInView={{ opacity: 1 }}
      >
      </motion.div>
    </AnimatePresence>
  );
};

export default Test;