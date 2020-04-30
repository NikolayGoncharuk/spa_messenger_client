import React from 'react';
// Styles
import { makeStyles } from '@material-ui/core/styles';
// Styled Component
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  circularProgressWrapper: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
  },
  circularProgress: {
    margin: 'auto',
  },
}));

export default function Loading() {
  const classes = useStyles();

  return (
    <div className={classes.circularProgressWrapper}>
      <CircularProgress color="inherit" className={classes.circularProgress} />
    </div>
  );
};