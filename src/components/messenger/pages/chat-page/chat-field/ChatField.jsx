import React from 'react';
// Hooks
import useWidth from '../../../hooks/useWidth';
// Components
import ChatHeader from './chat-header/ChatHeader';
import MessageContainer from './message-container/MessageContainer';
import SendMessageForm from './send-message-form/SendMessageForm';
// Styles
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
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

  useWidth(chatFieldRef, setChatFieldWidth);

  return (
    <div ref={chatFieldRef}>
      <div style={{ width: chatFieldWidth }} className={classes.container}>
        <ChatHeader
          selectedDialog={props.selectedDialog}
          profile={props.profile} А
        />
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