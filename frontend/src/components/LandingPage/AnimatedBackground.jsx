import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden -z-10">
      <motion.div
        animate={{
          x: [0, 200, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
        }}
        className="
          absolute
          top-20
          left-20
          h-96
          w-96
          rounded-full
          bg-pink-300/30
          blur-3xl
        "
      />

      <motion.div
        animate={{
          x: [0, -150, 0],
          y: [0, 150, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-20
          right-20
          h-96
          w-96
          rounded-full
          bg-yellow-300/30
          blur-3xl
        "
      />
    </div>
  );
}
