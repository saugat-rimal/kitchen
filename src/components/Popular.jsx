import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Popular = () => {
  const [veggie, setVeggie] = useState([]);

  const getVeggie = async () => {
    const checkVeggie = localStorage.getItem("veggie");

    if (checkVeggie) {
      setVeggie(JSON.parse(checkVeggie));
    } else {
      const response = await fetch(`
      https://api.spoonacular.com/recipes/random?apiKey=${
        import.meta.env.VITE_APP_API_KEY
      }&number=20`);
      const data = await response.json();
      setVeggie(data.recipes);
      localStorage.setItem("veggie", JSON.stringify(data.recipes));
    }
  };

  useEffect(() => {
    getVeggie();
  }, []);

  return (
    <section>
      <h2 className="drop-shadow text-3xl font-bold  text-[#494949]">
        Popular
      </h2>

      <Splide
        tag="section"
        options={{
          rewind: true,
          perPage: 4,
          perMove: 1,
          gap: "1rem",
          arrows: false,
          drag: "free",
          pagination: false,
          breakpoints: {
            640: {
              perPage: 1,
              gap: "1rem",
            },
            768: {
              perPage: 2,
              gap: "1rem",
            },
            1024: {
              perPage: 3,
              gap: "1rem",
            },
          },
        }}
      >
        {veggie.map((item) => {
          return (
            <SplideSlide key={item.id}>
              <Link to={`/recipe/${item.id}`}>
                <figure className=" flex flex-col gap-4 my-8 border-2 border-[#494949] drop-shadow-md rounded shadow-xl ">
                  <img
                    src={item.image}
                    alt={item.title}
                    className=" border-b-2 border-[#494949] object-cover"
                  />
                  <figcaption className="flex gap-7 items-start px-4 pb-4">
                    {item.title.length > 27 ? (
                      <h3 className="flex flex-1 text-[#494949]">
                        {item.title.slice(0, 25)}...
                      </h3>
                    ) : (
                      <h3 className="flex flex-1 text-[#494949]">
                        {item.title}
                      </h3>
                    )}
                  </figcaption>
                </figure>
              </Link>
            </SplideSlide>
          );
        })}
      </Splide>
    </section>
  );
};

export default Popular;
