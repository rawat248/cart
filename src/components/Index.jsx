import React from "react";
import { useSelector } from "react-redux";
import Home from "./Home";
import Model from "./model";
import Navbar from "./Navbar";

function Index() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  return (
    <div>
      {" "}
      {!showCart && <Home />}
      {showCart && <Navbar />}
      {showCart && <Model />}
    </div>
  );
}

export default Index;
