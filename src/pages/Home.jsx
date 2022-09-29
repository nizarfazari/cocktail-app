import axios from "axios";
import React, { useEffect, useState } from "react";
import { Contents } from "../component";
import "./styles.css";
import { useParams } from "react-router-dom";

const Home = () => {
  const { cat } = useParams();

  const [meals, setMeals] = useState([]);
  const [filter, setFilter] = useState("");

  const getData = async () => {
    try {
      const datas = await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?f=b");
      setMeals(datas.data.meals);
    } catch (error) {
      console.log(error);
    }
  };

  const changeCategory = async (category) => {
    try {
      const datas = await axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=" + category);
      setMeals(datas.data.meals);
    } catch (error) {
      console.log(error);
    }
  };
  const filterFood = async (food) => {
    try {
      if (food === "") {
        const datas = await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?f=" + filter);
        setMeals(datas.data.meals);
      } else {
        setFilter(food);
        const datas = await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?f=" + food);
        setMeals(datas.data.meals);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (cat) {
      changeCategory(cat);
    } else {
      getData();
    }
  }, [cat]);

  return <Contents meals={meals} filterFood={filterFood} cat={cat} />;
};

export default Home;
