import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Masonry from "react-masonry-css";

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const param = useParams();

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    <div className="flex justify-center items-center sm:mx-10 mx-5 ">
      <Masonry
        breakpointCols={breakpointObj}
        className="flex gap-5 relative items-center "
      >
        {cuisine.map((recipe) => {
          return (
            <div
              key={recipe.id}
              className="relative my-8 w-auto hover:shadow-lg rounded  overflow-hidden border-4 group border-[#edf2f7] flex flex-1 "
            >
              <Link
              // to={`/recipe/${recipe.id}`}
              >
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-auto object-cover bg-center bg-no-repeat "
                />

                {windowWidth > 640 ? (
                  <h2
                    className="absolute bottom-0 left-0 w-full p-2 text-[#494949] text-lg font-normal bg-gradient-to-t from-[#cbd5e0]  to-[#edf2f7]
                  opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out 
                   "
                  >
                    {recipe.title}
                  </h2>
                ) : (
                  <h2
                    className="absolute bottom-0 left-0 w-full p-2 text-[#494949] text-lg font-normal bg-gradient-to-t from-[#cbd5e0]  to-[#edf2f7]
                  opacity-100 
                   "
                  >
                    {recipe.title}
                  </h2>
                )}
              </Link>
            </div>
          );
        })}
      </Masonry>
    </div>
  );
};

export default Cuisine;
