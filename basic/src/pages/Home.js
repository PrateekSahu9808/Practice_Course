import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/products");
  };

  return (
    <>
      <h1>Home</h1>
      <p>
        <Link to="/products">List of product</Link>
      </p>
      <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </>
  );
};

export default Home;
