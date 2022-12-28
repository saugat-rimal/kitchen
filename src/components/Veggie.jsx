import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Veggie = () => {
  const [veggie, setVeggie] = useState([]);

  const getVeggie = async () => {
    const checkVeggie = localStorage.getItem("veggie");

    if (checkVeggie) {
      setVeggie(JSON.parse(checkVeggie));
    } else {
      const response = await fetch(`
      https://api.spoonacular.com/recipes/random?apiKey=${
        import.meta.env.VITE_APP_API_KEY
      }&number=20&tags=vegetarian`);
      const data = await response.json();
      setVeggie(data.recipes);
      localStorage.setItem("veggie", JSON.stringify(data.recipes));
    }
  };

  useEffect(() => {
    getVeggie();
  }, []);

  return (
    <section className="container">
      <h2 className="container__title">Veggie</h2>

      <div>
        {veggie.map((item) => {
          return (
            <div key={item.id}>
              <Link
              //  to={`/recipe/${item.id}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="container__img"
                />
                <h3 className="container__subtitle">{item.title}</h3>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Veggie;
