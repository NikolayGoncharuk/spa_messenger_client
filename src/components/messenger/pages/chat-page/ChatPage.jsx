import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// Components
import MemberField from './member-field/MemberField';
import ChatField from './chat-field/ChatField';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '500px 1fr',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  dialogs: {
    display: 'block',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  chat: {
    marginRight: theme.spacing(6),
    [theme.breakpoints.down('sm')]: {
      marginRight: 0,
    },
  },
}));

export default function ChatPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.dialogs}>
        <MemberField />
      </div>
      <div className={classes.chat}>
        <ChatField />
      </div>
    </div>
  );
};