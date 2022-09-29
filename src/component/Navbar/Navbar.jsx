import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const navigate = useNavigate();
  return (
    <nav className="navbar ">
      <div className=" flex items-center justify-between container mx-auto h-16 text-white ">
        <div className="logo">
          <h1 className="text-2xl m-0">Foodish</h1>
        </div>
        <div className="categories">
          <ul className="flex text-lg gap-x-5 mb-0 ">
            <li className="cursor-pointer" onClick={() => navigate("/")}>
              Home
            </li>
            <li className="cursor-pointer" onClick={() => navigate("/category/Chicken")}>
              Chicken
            </li>
            <li className="cursor-pointer" onClick={() => navigate("/category/Dessert")}>
              Desert
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
