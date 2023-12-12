import React from "react";

import "../index.css";

const Pizza = ({ pizzaObj }) => {
  // if (pizzaObj.soldOut) return null;

  return (
    // <li className="pizza">
    //   <img src={props.pizzaObj.photoName} alt="spinaci" />
    //   <div>
    //     <h3>{props.pizzaObj.name}</h3>
    //     <p>{props.pizzaObj.ingredients}</p>
    //     <span>{props.pizzaObj.price}</span>
    //   </div>
    // </li>
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt="spinaci" />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        {/* {pizzaObj.soldOut ? (
          <span>SOLD OUT</span>
        ) : (
          <span>{pizzaObj.price}</span>
        )} */}
        {pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}
      </div>
    </li>
  );
};

export default Pizza;
