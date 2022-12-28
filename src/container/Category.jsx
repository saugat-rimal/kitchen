import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks, GiDumpling } from "react-icons/gi";

import RoundedBox from "../components/RoundedBox";

const Category = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 my-8">
      <RoundedBox key="1" text="Indian" icon={<GiDumpling fontSize={24} />} />
      <RoundedBox
        key="2"
        text="Italian"
        icon={<FaPizzaSlice fontSize={24} />}
      />
      <RoundedBox
        key="3"
        text="American"
        icon={<FaHamburger fontSize={24} />}
      />
      <RoundedBox key="4" text="Thai" icon={<GiNoodles fontSize={24} />} />
      <RoundedBox
        key="5"
        text="Japanese"
        icon={<GiChopsticks fontSize={24} />}
      />
    </div>
  );
};

export default Category;
