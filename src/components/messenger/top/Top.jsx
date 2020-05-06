import React from 'react';
// Styles
import { makeStyles } from '@material-ui/core/styles';
// Styled Components
import { Typography } from '@material-ui/core';
// Icons
import ChatIcon from '@material-ui/icons/Chat';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gridGap: theme.spacing(2),
    padding: theme.spacing(3, 0),
  },
  logo: {
    marginTop: '4px',
  },
}));

export default function UsersField() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ChatIcon className={classes.logo} />
      <div>
        <Typography variant="subtitle2">Messenger</Typography>
        <Typography color="textSecondary" variant="caption">Почти как Телега, только не Телега</Typography>
      </div>
    </div>
  );
};