import { motion } from "framer-motion";
import { useScrollAnimate } from "../hooks/useScrollAnimate";

export const StaggerParent = ({ children }) => {
  const { ref, controls } = useScrollAnimate(0);

  const staggerParent = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={staggerParent}
      initial="initial"
      animate={controls ? controls : "animate"}
    >
      {children}
    </motion.div>
  );
};
