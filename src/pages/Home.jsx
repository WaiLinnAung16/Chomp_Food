import React from "react";
import Hero from "../components/Home/Hero";

const Home = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  return (
    <div>
      <Hero />
    </div>
  );
};

export default Home;
