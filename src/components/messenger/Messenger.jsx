import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// Components
import Sidebar from './sidebar/Sidebar';
import ChatPage from './pages/chat-page/ChatPage';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '300px auto',
    gridTemplateAreas: "'menu content'",
    [theme.breakpoints.down('md')]: {
      display: 'block',
    },
  },
  menu: {
    display: 'block',
    gridArea: 'menu',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  content: {
    gridArea: 'content',
  },
}));

export default function Messenger() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.menu}>
        <Sidebar />
      </div>
      <div className={classes.content}>
        <ChatPage />
      </div>
    </div>
  );
};