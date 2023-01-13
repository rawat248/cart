import React from "react";
import { useSelector } from "react-redux";
import Home from "./components/Home";
import Model from "./components/Model";
import Navbar from "./components/Navbar";

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  return (
    <div>
      {!showCart && <Home />}
      {showCart && <Navbar />}
      {showCart && <Model />}
    </div>
  );
}

export default App;
