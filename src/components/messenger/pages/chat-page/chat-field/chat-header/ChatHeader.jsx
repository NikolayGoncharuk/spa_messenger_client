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
  const { profile: { _id }, selectedDialog } = props;
  const classes = useStyles();

  // Опеределение получаетля
  const getParticipant = () => {
    const participants = selectedDialog.participantsObj;
    for (let i = 0; i < participants.length; i++) {
      if (participants[i]._id !== _id) {
        return participants[i];
      };
    };
  };

  return (
    <Paper className={classes.root}>
      <Typography>{`${getParticipant().firstName} ${getParticipant().lastName}`}</Typography>
      <div>
        <StyledBadge style={{ marginRight: '10px', }} invisible={false} overlap="circle" variant="dot" />
        <Typography variant="caption">Online</Typography>
      </div>
    </Paper>
  );
};