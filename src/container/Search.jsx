import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div>
      <form className="flex items-center justify-center gap-4 relative w-full mx-auto my-0 sm:my-16 max-w-2xl ">
        <FaSearch className="absolute left-6 top-4 text-lg text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          className="flex items-center gap-4 border bg-gradient-to-bl from-[#494949]
        to-[#313131] text-lg outline-none font-normal focus:outline-none focus:border-[#494949] w-full h-12 rounded px-10 max-w-2xl text-gray-100 mx-3"
        />
      </form>
    </div>
  );
};

export default Search;
