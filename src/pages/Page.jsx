import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import Error from "./Error";
import Cuisine from "./Cuisine";
import Searched from "./Searched";

const Page = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:path" element={<Cuisine />} />
        <Route path="/search/:search" element={<Searched />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default Page;
