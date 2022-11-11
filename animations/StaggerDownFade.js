import { motion } from "framer-motion";

export const StaggerDownFade = ({ children }) => {
  const slideDownFade = {
    initial: {
      opacity: 0,
      y: -40,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div
      variants={slideDownFade}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};
