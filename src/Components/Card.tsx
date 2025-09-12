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
      className="p-6 text-center bg-white rounded-lg shadow-md cursor-pointer"
    >
      <img
        src={image}
        alt={title}
        className="object-cover w-48 h-48 mx-auto rounded-md"
      />
      <h2 className="mt-4 text-lg font-bold">{title}</h2>
      <p className="text-gray-600">{subtitle}</p>
      <span className="font-semibold text-yellow-500">{discount}</span>
    </motion.div>
  );
};

export default Card;
