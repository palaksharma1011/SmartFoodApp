import { motion } from "framer-motion";

export default function FoodCard({ food }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.04,
        rotate: 1,
        y: -8,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
      }}
      className="
        overflow-hidden
        rounded-[30px]
        bg-white
        shadow-xl
        cursor-pointer
      "
    >
      <div className="overflow-hidden">
        <img
          src={food.img}
          className="
            w-full
            object-cover
            transition
            duration-700
            hover:scale-110
          "
        />
      </div>

      <div className="p-5">
        <h3 className="font-bold text-xl">
          {food.title}
        </h3>

        <p className="text-gray-500">
          Swipe to discover
        </p>
      </div>
    </motion.div>
  );
}