import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import Error from "./Error";
import Cuisine from "./Cuisine";

const Page = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:path" element={<Cuisine />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default Page;
