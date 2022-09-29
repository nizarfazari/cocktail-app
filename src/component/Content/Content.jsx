import React from "react";
import { useNavigate } from "react-router-dom";
import "./contents.css";

const Contents = (props) => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto pt-5 ">
      <div className="description-title flex flex-col mb-5 border-2 p-5 text-center text-white">
        <h1 className="text-2xl ">Welcome to Foodish Restaurant</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error placeat quisquam iure asperiores quod qui eius perferendis quidem tempore. Optio!</p>
      </div>
      <div className="flex justify-between items-center ">
        <h1 className="text-3xl text-white my-5">{props.cat ?? "All Food"}</h1>
        <div className="input">
          <input type="text" className="py-2 px-3 rounded-2xl placeholder-gray-500 w-80 flex" placeholder="Search food" onChange={(e) => props.filterFood(e.target.value)} />
        </div>
      </div>

      <div className="kontents grid xl:grid-cols-4 md:grid-cols-3 gap-4 grid-cols-2">
        {props.meals &&
          props.meals.map((meal) => {
            return (
              <div className="cards p-6 rounded-xl text-white cursor-pointer" onClick={() => navigate(`/${meal.idMeal}`)}>
                <img src={meal.strMealThumb} alt="" className="w-80 " />

                <h1 className="text-xl mt-3 mb-2">{meal.strMeal}</h1>
                <p className="text-base font-light">{meal.strCategory}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Contents;
