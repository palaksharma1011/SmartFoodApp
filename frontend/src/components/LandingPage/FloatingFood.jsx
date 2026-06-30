import { motion } from "framer-motion";

const emojis = ["🍕","🍔","🍜","🥗","🍩"];

export default function FloatingFood() {
  return (
    <>
      {emojis.map((emoji,i)=>(
        <motion.div
          key={i}
          animate={{
            y:[0,-20,0],
            rotate:[0,10,-10,0]
          }}
          transition={{
            duration:4+i,
            repeat:Infinity
          }}
          className="
            fixed
            text-4xl
            pointer-events-none
          "
          style={{
            left:`${10+i*18}%`,
            top:`${20+i*10}%`
          }}
        >
          {emoji}
        </motion.div>
      ))}
    </>
  );
}