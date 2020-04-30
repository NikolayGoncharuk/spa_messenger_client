import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, Paper, InputBase, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
  searchWrapper: {
    position: 'sticky',
    top: 0,
    padding: theme.spacing(1, 2),
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    display: 'flex',
    zIndex: theme.zIndex.appBar,
  },
  searchDivider: {
    height: 28,
    margin: theme.spacing('auto', '4px'),
  },
}));

export default function Search() {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.searchWrapper}>
      <InputBase
        placeholder="Поиск..."
        fullWidth
      />
      <IconButton type="submit">
        <SearchIcon />
      </IconButton>
      <Divider className={classes.searchDivider} orientation="vertical" />
      <IconButton>
        <AddIcon />
      </IconButton>
    </Paper>
  );
};