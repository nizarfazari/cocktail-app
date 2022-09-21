import { Layout, Menu } from "antd";
import React from "react";

const { Header } = Layout;

const Navbar = (props) => {
  return (
    <Header style={{ position: "fixed", width: "100%", zIndex: "2" }}>
      <div className="container" style={{ display: "flex", justifyContent: "space-between", alignContent: "center", height: "64px" }}>
        <div className="logo">
          <h1>Dishes Food</h1>
        </div>
        <Menu mode="horizontal" theme="dark">
          <Menu.Item onClick={() => props.getData()}>Home</Menu.Item>
          <Menu.Item onClick={() => props.changeCategory("Chicken")}>Chiken</Menu.Item>
          <Menu.Item onClick={() => props.changeCategory("Dessert")}>Desert </Menu.Item>
        </Menu>
      </div>
    </Header>
  );
};

export default Navbar;
