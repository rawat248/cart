import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import Category from "./Category";
import "./Home.css";
import Menu from "./Menu";
import data from "./Data";
import Navbar from "./Navbar";

const allCatValues = [...new Set(data.map((curElem) => curElem.category))];

function Home() {
  const [state, setState] = useState(data);
  const [inputSearch, setInputSearch] = useState("");

  const catItems = allCatValues;

  const changeInput = (e) => setInputSearch(e.target.value);

  const filterMenu = (category) => {
    const updatedItems = data.filter((item) => item.category === category);
    setState(updatedItems);
  };

  const applyFilters = () => {
    if (inputSearch) {
      const updatedList = data.filter(
        (item) => item.title.toLowerCase().search(inputSearch.toLowerCase().trim())
          !== -1,
      );
      setState(updatedList);
    }
  };
  useEffect(() => {
    applyFilters();
  }, []);

  return (
    <div>
      <Navbar />
      <SearchBar inputSearch={applyFilters} changeInput={changeInput} />
      <Category filterMenu={filterMenu} catItems={catItems} />
      <Menu items={state} />
    </div>
  );
}

export default Home;
