import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper } from '@material-ui/core';
import StyledBadge from '../../../../../../styles/styled-components/StyledBadge';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1, 2),
    alignItems: 'center',
    textAlign: 'center',
    zIndex: theme.zIndex.appBar,
  },
}));

export default function ChatHeader(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography>Роджер Гилл</Typography>
      <div>
        <StyledBadge style={{ marginRight: '10px', }} invisible={false} overlap="circle" variant="dot" />
        <Typography variant="caption">Online</Typography>
      </div>
    </Paper>
  );
};