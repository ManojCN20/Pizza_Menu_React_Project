import React from "react";

import "../index.css";

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 11;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  //   if (hour >= openHour && hour <= closeHour) alert("We're Currently Open!");
  //   else alert("Sorry we're closed");

  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()} We're currently open
    </footer>
  );
};

export default Footer;
