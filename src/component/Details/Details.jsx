import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "antd";

const { Meta } = Card;
const Details = () => {
  const [meal, setMeal] = useState([]);
  let { id } = useParams();

  const getData = async () => {
    try {
      const datas = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      setMeal(datas.data.meals[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(meal);
  return (
    <div>
      <Card
        hoverable
        style={{
          width: 240,
        }}
        cover={<img alt="example" src={meal.strMealThumb} />}
      >
        <Meta title={meal.strMeal} description={meal.strCategory} />
      </Card>
    </div>
  );
};

export default Details;
