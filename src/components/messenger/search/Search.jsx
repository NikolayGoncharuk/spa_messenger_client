import React from 'react';
// Styles
import { makeStyles } from '@material-ui/core/styles';
// Styled Components
import { Paper, InputAdornment, InputBase } from '@material-ui/core';
// Icons
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
  wrapper: {
    position: 'sticky',
    top: 0,
    padding: theme.spacing(2, 2),
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    display: 'flex',
    zIndex: theme.zIndex.appBar,
  },
}));

export default function Search(props) {
  const classes = useStyles();

  const handleInput = (event) => {
    props.setSearchValue(event.target.value);
  };

  return (
    <Paper className={classes.wrapper}>
      <InputBase
        placeholder="Поиск по списку..."
        type="text"
        fullWidth
        value={props.serachValue}
        onChange={handleInput}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon color="disabled" />
          </InputAdornment>
        }
      />
    </Paper>
  );
};