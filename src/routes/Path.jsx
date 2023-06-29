import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Order from "../pages/Order";
import Company from "../pages/Company";
import FAQ from "../pages/FAQ";
import Contact from "../pages/Contact";

const Path = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/order" element={<Order />} />
      <Route path="/company" element={<Company />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Path;
