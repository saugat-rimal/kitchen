import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";

const Nav = () => {
  return (
    <nav className="flex w-full m-auto py-6 sm:px-16 px-5 drop-shadow-lg">
      <Link
        to="/"
        //   className="flex items-center gap-2 text-3xl font-normal
        //  bg-gradient-to-r from-[#494949] to-[#313131] bg-clip-text text-transparent
        //   hover:bg-gradient-to-r  hover:from-[#494949] hover:to-[#313131] hover:bg-clip-text hover:text-transparent"
        className="flex items-center justify-center sm:justify-start"
      >
        {/* <GiKnifeFork className="text-[#494949]  " />
        <h2 className="flex font-Lobster ">Kitchen</h2> */}
        <img src="/kitchenbook.svg" alt="" className=" w-4/12 lg:-mb-20 " />
      </Link>
    </nav>
  );
};

export default Nav;
