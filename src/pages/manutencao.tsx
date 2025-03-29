import { motion } from "motion/react";
export default function Manutencao() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        whileHover={{
          scale: 1.03,
          transition: { duration: 0.8, ease: "easeOut" },
        }}
      >
        Site em manutenção
      </motion.h1>
    </div>
  );
}
