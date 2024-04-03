import { motion } from "framer-motion";
import { styles } from "../style";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) => {
  return function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-2xl mx-ato relative z-0`}
      >
        {/* Enbale scroll when click the hero */}
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };
};

export default SectionWrapper;
