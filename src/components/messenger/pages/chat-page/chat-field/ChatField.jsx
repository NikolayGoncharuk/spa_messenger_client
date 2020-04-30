import React from 'react';
import { setDynamicWidth } from '../../../setDynamicWidth';
// Components
import ChatHeader from './chat-header/ChatHeader';
import MessageContainer from './message-container/MessageContainer';
import SendMessageForm from './send-message-form/SendMessageForm';
// Styles
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  chatContainer: {
    position: 'fixed',
    height: '100%',
    display: 'grid',
    gridTemplateRows: 'auto 1fr auto',
  },
}));

export default function ChatField() {
  const classes = useStyles();
  const chatFieldRef = React.useRef();
  const [chatFieldWidth, setChatFieldWidth] = React.useState(null);

  React.useEffect(() => {
    setDynamicWidth(chatFieldRef, (value) => {
      setChatFieldWidth(value);
    });
  }, []);

  return (
    <div ref={chatFieldRef}>
      <div style={{ width: chatFieldWidth }} className={classes.chatContainer}>
        <ChatHeader />
        <MessageContainer />
        <SendMessageForm />
      </div>
    </div>
  );
};