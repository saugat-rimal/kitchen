import Popular from "../components/Popular";
import Veggie from "../components/Veggie";

const Home = () => {
  return (
    <div className="container mx-auto bg-red-300 mt-20 px-4 sm:px-8 max-w-screen-xl">
      <Popular />
      <Veggie />
    </div>
  );
};

export default Home;
