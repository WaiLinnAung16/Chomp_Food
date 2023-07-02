import React from "react";
import Hero from "../components/Home/Hero";
import Products from "../components/Home/Products";
import HowItWork from "../components/Home/HowItWork";

const Home = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  return (
    <div>
      <Hero />
      <Products />
      <HowItWork />
    </div>
  );
};

export default Home;
