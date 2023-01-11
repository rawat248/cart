import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  search: {
    width: '100%',
    position: 'relative',
    display: 'flex',
  },

  searchTerm: {
    width: '100%',
    border: '3px solid',
    borderColor: '#00B4CC',

    padding: '5px',
    height: '20px',
    borderRadius: '5px005px',
    outline: 'none',
    color: '#9DBFAF',
  },

  // searchTerm:focus:{
  //   color: "#00B4CC",
  // },

  searchButton: {
    width: '80px',
    height: '36px',
    border: '1px solid',
    borderColor: '#00B4CC',
    background: '#00B4CC',
    textAlign: 'center',
    color: '#fff',
    shape: '04px4px0',

    cursor: 'pointer',
    fontSize: '20px',
  },

  wrap: {
    width: '30%',
    position: 'absolute',
    top: '20%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
  },

  head: {
    width: '100%',
    height: '50px',
    // padding: '010%',
    background: '#00B4CC',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default useStyles;
