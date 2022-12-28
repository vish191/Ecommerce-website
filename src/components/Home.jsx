import React from "react";
import Products from "./Products";
import logo from './h&m.jpg'

const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img src={logo} className="card-img" alt="Background" height="550px"/>
        <div className="card-img-overlay d-flex flex-coloumn justify-content-center">
        <div className="container">
          <h5 className="card-title display-3 fw-bolder  mb-0">NEW SEASON ARRIVALS </h5>
          <p className="card-text lead fs-2">
            <b>CHECK OUT ALL THE TRENDS</b>
          </p>
          </div>
        </div>
      </div>
      <Products/>
    </div>
  );
};

export default Home;