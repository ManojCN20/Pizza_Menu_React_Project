import React from "react";
import Pizza from "./Pizza";

import "../index.css";

const Menu = () => {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza
        name="Pizza Spinaci"
        ingredient="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="Assets/Images/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Funghi"
        ingredient="Tomato, Mushrooms"
        photoName="Assets/Images/funghi.jpg"
        price={12}
      />
    </main>
  );
};

export default Menu;
