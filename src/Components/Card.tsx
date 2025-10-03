import { motion } from "framer-motion";

type CardProps = {
  title: string;
  subtitle: string;
  discount: string;
  image: string;
};

const Card: React.FC<CardProps> = ({ title, subtitle, discount, image }) => {
  return (
    <motion.div
      whileTap={{ scale: 0.95, rotate: -2 }} // Animation when clicked
      whileHover={{ scale: 1.05 }} // Optional hover effect
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="flex flex-col items-center w-full max-w-xs p-4 mx-auto text-center bg-white rounded-lg shadow-md cursor-pointer sm:p-5 md:p-6"
    >
      <img
        src={image}
        alt={title}
        className="object-cover w-full h-48 rounded-md sm:h-52 md:h-56 lg:h-64"
      />
      <h2 className="mt-4 text-base font-bold sm:text-lg md:text-xl">{title}</h2>
      <p className="text-sm text-gray-600 sm:text-base">{subtitle}</p>
      <span className="mt-2 text-sm font-semibold text-yellow-500 sm:text-base md:text-lg">{discount}</span>
    </motion.div>
  );
};

export default Card;
