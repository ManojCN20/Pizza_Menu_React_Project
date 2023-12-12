import React from "react";

const Order = ({ close }) => {
  return (
    <div className="order">
      <p>We're Open Until {close}:00. Come Visit Us or Order Online </p>
      <button className="btn">Order</button>
    </div>
  );
};

export default Order;
