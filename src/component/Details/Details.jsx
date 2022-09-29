import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./details.css";

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
  return (
    <div className="container mx-auto">
      <div className="details-background p-10">
        <div className="images-detail">
          <img alt="example" src={meal.strMealThumb} />
        </div>
        <div className="details-description text-white border-2 p-10">
          <h1 className="text-xl">{meal.strMeal}</h1>
          <p>{meal.strCategory}</p>
          <h2>Ingridients</h2>

          <p>{meal.strIngredient1}</p>
          <p>{meal.strIngredient2}</p>
          <p>{meal.strIngredient3}</p>
          <p>{meal.strIngredient4}</p>
        </div>
      </div>
      {/* <Layout>
        <Content className="site-layout" style={{ padding: "0 50px", marginTop: 64 }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 380, display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            <div className="images">
              <img alt="example" src={meal.strMealThumb} />
            </div>
            <div className="details">
              <h1 className="text-xl">{meal.strMeal}</h1>
              <p>{meal.strCategory}</p>
              <h2>Ingridients</h2>

              <p>{meal.strIngredient1}</p>
              <p>{meal.strIngredient2}</p>
              <p>{meal.strIngredient3}</p>
              <p>{meal.strIngredient4}</p>
            </div> */}
      {/* <Card
              hoverable
              style={{
                width: 240,
              }}
              cover={}
            >
              <Meta title={meal.strMeal} description={meal.strCategory} />
            </Card> */}
      {/* </div>
        </Content>
      </Layout> */}
    </div>
  );
};

export default Details;
