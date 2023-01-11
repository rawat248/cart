import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';
import useStyles from './Categorystyles';

function Category({ filterMenu, catItems }) {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.wrap}>
        <div className={classes.category}>
          <Stack spacing={2} direction="row">
            {catItems.map((curElem) => (
              <Button
                type="submit"
                variant="contained"
                size="medium"
                onClick={() => filterMenu(curElem)}
              >
                {curElem}
              </Button>
            ))}
          </Stack>
        </div>
      </div>
    </div>
  );
}
Category.propTypes = {
  filterMenu: PropTypes.string.isRequired,
};
Category.propTypes = {
  catItems: PropTypes.string.isRequired,
};

export default Category;
