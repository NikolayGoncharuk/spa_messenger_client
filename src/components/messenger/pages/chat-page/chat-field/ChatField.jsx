import React from 'react';
import { customUseWidth } from '../../../customUseWidth';
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

export default function ChatField(props) {
  const classes = useStyles();
  const chatFieldRef = React.useRef();
  const [chatFieldWidth, setChatFieldWidth] = React.useState(null);

  React.useEffect(() => {
    customUseWidth(chatFieldRef, (value) => {
      setChatFieldWidth(value);
    });
  }, []);

  return (
    <div ref={chatFieldRef}>
      <div style={{ width: chatFieldWidth }} className={classes.chatContainer}>
        <ChatHeader />
        <MessageContainer {...props} />
        <SendMessageForm
          postMessage={props.postMessage}
          selectedDialog={props.selectedDialog}
          profile={props.profile}
        />
      </div>
    </div>
  );
};