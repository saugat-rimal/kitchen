import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Masonry from "react-masonry-css";

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);
  const param = useParams();

  const getCuisine = async (name) => {
    const checkCuisine = localStorage.getItem(name);

    if (checkCuisine) {
      setCuisine(JSON.parse(checkCuisine));
    } else {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
          import.meta.env.VITE_APP_API_KEY
        }&number=20&cuisine=${name}`
      );

      const data = await response.json();
      localStorage.setItem(name, JSON.stringify(data.results));
      setCuisine(data.results);
      // console.log(data.results);
    }
  };

  useEffect(() => {
    getCuisine(param.path);
  }, [param.path]);

  const breakpointObj = {
    default: 4,
    1500: 4,
    1200: 3,
    1000: 2,
    600: 1,
  };

  return (
    <div className="flex justify-center items-center  mx-5 ">
      <Masonry
        breakpointCols={breakpointObj}
        className="flex gap-5 relative items-center max-w-7xl"
      >
        {cuisine.map((item) => {
          return (
            <div key={item.id}>
              <Link to={`/recipe/${item.id}`}>
                <figure className=" flex flex-col gap-4 my-8 border-2 border-[#494949] drop-shadow-md rounded shadow-xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className=" border-b-2 border-[#494949] object-cover object-center h-auto w-full"
                  />
                  <figcaption className="flex gap-7 items-start px-4 pb-4">
                    {item.title.length > 40 ? (
                      <h3 className="flex flex-1 text-[#494949] dark:text-white">
                        {item.title.slice(0, 40)}...
                      </h3>
                    ) : (
                      <h3 className="flex flex-1 dark:text-white text-[#494949]">
                        {item.title}
                      </h3>
                    )}

                    <button className="flex flex-shrink-0 dark:text-white">
                      More Info
                    </button>
                  </figcaption>
                </figure>
              </Link>
            </div>
          );
        })}
      </Masonry>
    </div>
  );
};

export default Cuisine;
