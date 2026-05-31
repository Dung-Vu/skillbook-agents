"use client";

import { motion } from "framer-motion";

export default function SkillsTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 28,
        mass: 0.5,
      }}
      className="w-full min-h-screen origin-top"
    >
      {children}
    </motion.div>
  );
}
