import React from "react";
import Navbar from "./components/Navbar";
import Path from "./routes/Path";

const App = () => {
  return (
    <div className="font-body h-[3000px]">
      <Navbar />
      <Path />
    </div>
  );
};

export default App;
