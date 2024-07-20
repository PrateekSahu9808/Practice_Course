import React from "react";
import logoImg from "../assets/quiz-logo.png";
const Header = () => {
  return (
    <header>
      <img src={logoImg} alt="Quiz log" />
      <h1>React quiz</h1>
    </header>
  );
};

export default Header;
