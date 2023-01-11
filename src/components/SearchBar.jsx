import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './SearchBarstyles';

function SearchBar({ inputSearch, changeInput }) {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.wrap}>
        <div className={classes.search}>
          <input
            type="text"
            className={classes.searchTerm}
            placeholder="Search for medicine"
            value={inputSearch}
            onChange={changeInput}
          />
          <button type="submit" className={classes.searchButton}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
SearchBar.propTypes = {
  inputSearch: PropTypes.string.isRequired,
};
SearchBar.propTypes = {
  changeInput: PropTypes.string.isRequired,
};

export default SearchBar;
