import React from "react";
import Hero from "../components/Home/Hero";
import Products from "../components/Home/Products";
import HowItWork from "../components/Home/HowItWork";
import OurMenu from "../components/Home/OurMenu";

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
      <OurMenu />
    </div>
  );
};

export default Home;
