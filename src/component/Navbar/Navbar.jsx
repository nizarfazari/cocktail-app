import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const navigate = useNavigate();
  return (
    <nav className="navbar ">
      <div className="containers flex items-center justify-between  mx-auto h-16">
        <div className="logo">
          <h1 className="text-2xl m-0 text-white font-semibold font-sans">Foodish</h1>
        </div>
        <div className="categories">
          <ul className="flex text-lg gap-x-5 mb-0 ">
            <li className="category" onClick={() => navigate("/")}>
              <span>Home</span>
            </li>
            <li className="category" onClick={() => navigate("/category/Chicken")}>
              <span>Chicken</span>
            </li>
            <li className="category" onClick={() => navigate("/category/Dessert")}>
              <span>Desert</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
