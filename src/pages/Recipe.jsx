import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Recipe = () => {
  const params = useParams();
  const [recipe, setRecipe] = useState([]);
  const [activeTab, setActiveTab] = useState("ingredients");

  const getRecipe = async (id) => {
    const checkRecipe = localStorage.getItem(id);

    if (checkRecipe) {
      setRecipe(JSON.parse(checkRecipe));
    } else {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${
          import.meta.env.VITE_APP_API_KEY
        }`
      );
      const data = await response.json();
      localStorage.setItem(id, JSON.stringify(data));
      setRecipe(data);
      console.log(data);
    }
  };

  useEffect(() => {
    getRecipe(params.id);
  }, [params.id]);

  return (
    <section className=" container mx-auto sm:px-8 px-4 max-w-screen-xl drop-shadow my-16">
      <h2 className="text-2xl font-semibold my-10">{recipe.title}</h2>

      <div className="flex flex-wrap gap-8 xl:justify-around">
        <div className="flex flex-col gap-6 ">
          <span>
            <img
              src={recipe.image}
              alt={recipe.title}
              className="sm:max-w-[490px] sm:w-auto  w-[320px] max-w-none h-auto object-cover object-center rounded-lg "
            />
          </span>

          <span className="flex flex-wrap gap-5 max-w-xl">
            <p>
              <b>Ready in:</b> {recipe.readyInMinutes} minutes
            </p>
            <p>
              <b>Servings:</b> {recipe.servings}
            </p>
            <p>
              <b>Dish Type:</b> {recipe.dishTypes}
            </p>
          </span>
        </div>

        <div>
          <div className="flex gap-6">
            <button
              className={activeTab === "instructions" ? "active" : " "}
              onClick={() => setActiveTab("instructions")}
            >
              Instructions
            </button>
            <button
              className={activeTab === "ingredients" ? "active" : " "}
              onClick={() => setActiveTab("ingredients")}
            >
              Ingredients
            </button>
          </div>

          <div className="flex  xl:max-w-[30rem] p-4 mt-3">
            {activeTab === "instructions" && (
              <div>
                <p
                  dangerouslySetInnerHTML={{ __html: recipe.instructions }}
                ></p>
              </div>
            )}

            {activeTab === "ingredients" && (
              <ul>
                {recipe.extendedIngredients?.map((item, index) => {
                  return <li key={index}>{item.original}</li>;
                })}
              </ul>
            )}
          </div>
        </div>
      </div>

      <span>
        <h2 className="text-2xl font-semibold mt-10 mb-8">Summary</h2>

        <p dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>
      </span>
    </section>
  );
};

export default Recipe;

{
  /* <article class=" ">
<div class="">
  <h2 className="text-2xl font-semibold my-10">{recipe.title}</h2>
</div>

<div className="flex flex-col w-full justify-center">
  <div>
    <p>Ready in: {recipe.readyInMinutes} minutes</p>
    <p>Servings: {recipe.servings}</p>
    <p>Dish Type: {recipe.dishTypes}</p>
  </div>

  <div className="flex w-full gap-5 flex-wrap">
    <div class=" w-1/3">
      <img src={recipe.image} alt={recipe.title} />
    </div>

    <div class=" w-1/3">
      <button
        className={activeTab === "instructions" ? "activeBtn" : " "}
        onClick={() => setActiveTab("instructions")}
      >
        Instructions
      </button>
      <button
        className={activeTab === "ingredients" ? "activeBtn" : " "}
        onClick={() => setActiveTab("ingredients")}
      >
        Ingredients
      </button>

      {activeTab === "instructions" && (
        <div>
          <p
            dangerouslySetInnerHTML={{ __html: recipe.instructions }}
          ></p>
        </div>
      )}

      {activeTab === "ingredients" && (
        <ul>
          {recipe.extendedIngredients?.map((item, index) => {
            return <li key={index}>{item.original}</li>;
          })}
        </ul>
      )}
    </div>
  </div>

  <div class="w-1/3">
    <p dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>
  </div>
</div>
</article> */
}
