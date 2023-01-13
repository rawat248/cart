import React from "react";
import useStyles from "./SearchBarstyles";
import Cart from "./Cart";

function Navbar() {
  const classes = useStyles();
  return (
    <div className={classes.head}>
      <h1 className={classes.med}> MedList</h1>
      <div>
        <Cart />
      </div>
    </div>
  );
}

export default Navbar;
