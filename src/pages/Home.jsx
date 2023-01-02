import Popular from "../components/Popular";
import Veggie from "../components/Veggie";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto mt-20 px-4 sm:px-8 max-w-screen-xl pb-16"
    >
      <Popular />
      <Veggie />
    </motion.div>
  );
};

export default Home;
