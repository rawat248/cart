import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import Category from './Category';
import useStyles from './SearchBarstyles';
import Cart from './Cart';
import './Home.css';
import Menu from './Menu';
import data from './Data';

const allCatValues = [...new Set(data.map((curElem) => curElem.category))];

function Home() {
  const [state, setState] = useState(data);
  const [inputSearch, setInputSearch] = useState('');

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
  }, [inputSearch]);

  const classes = useStyles();
  return (
    <div>
      <div className={classes.head}>
        <div> MedList</div>
        <div>
          <Cart />
        </div>
      </div>
      <SearchBar inputSearch={inputSearch} changeInput={changeInput} />
      <Category filterMenu={filterMenu} catItems={catItems} />
      <Menu items={state} />
    </div>
  );
}

export default Home;
