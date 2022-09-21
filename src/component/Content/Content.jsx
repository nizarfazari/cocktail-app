import React from "react";
import { Layout, Card, Input } from "antd";
import { useNavigate } from "react-router-dom";
const { Meta } = Card;
const { Search } = Input;
const { Content } = Layout;
const Contents = (props) => {
  const navigate = useNavigate();
  console.log(props.meals);
  return (
    <Content className="site-layout" style={{ padding: "0 200px", marginTop: 64 }}>
      <div className="titles" style={{ padding: 24, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>All Food</h1>
        <Search placeholder="input search text" style={{ width: 200 }} onChange={(e) => props.filterFood(e)} />
      </div>
      <div className="meals" style={{ display: "flex", flexWrap: "wrap" }}>
        {props.meals !== undefined &&
          props.meals.map((meal) => {
            return (
              <div className="site-layout-background" style={{ padding: 24 }} key={meal.idMeal}>
                <Card hoverable style={{ width: 300 }} cover={<img alt="example" src={meal.strMealThumb} onClick={() => navigate(`/${meal.idMeal}`)} />}>
                  <Meta title={meal.strMeal} description={meal.strCategory} />
                </Card>
              </div>
            );
          })}
      </div>
    </Content>
  );
};

export default Contents;
