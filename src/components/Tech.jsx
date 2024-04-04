/* eslint-disable react-refresh/only-export-components */
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../HOC";
import { technologies } from "../constants";
import { styles } from "../style";
import { motion } from "framer-motion";

const Tech = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>What I used</p>
        <h2 className={styles.sectionHeadText}>Tech Stack.</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => {
          return (
            <div className="w-28 h-28" key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
