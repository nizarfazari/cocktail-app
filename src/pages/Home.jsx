import axios from "axios";
import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import { Footers, Navbar, Contents } from "../component";
import "./styles.css";

const Home = () => {
  const [meals, setMeals] = useState([]);

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
    console.log(food.target.value);
    try {
      const datas = await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?f=" + food.target.value);
      setMeals(datas.data.meals);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Layout>
      <Navbar changeCategory={changeCategory} getData={getData} />
      <Contents meals={meals} filterFood={filterFood} />
      <Footers />
    </Layout>
  );
};

export default Home;
