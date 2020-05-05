import React from 'react';
// Components
import Message from './message/Message';
// Styles
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
  },
  chatWindow: {
    position: 'absolute',
    overflow: 'auto',
    height: '100%',
    width: '100%',
    padding: theme.spacing(3),
    '&::-webkit-scrollbar': {
      width: '8px',
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: '100px',
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0, 0, 0, 0.0)',
      backgroundColor: 'rgba(127, 127, 127, 0.3)',
    },
  },
}));

export default function MessageContainer(props) {
  const classes = useStyles();
  const chatArrayRef = React.useRef();
  const [chatArrayHeight, setChatArrayHeight] = React.useState(null);

  React.useEffect(() => {
    setChatArrayHeight(Math.max(
      chatArrayRef.current.scrollHeight,
      chatArrayRef.current.offsetHeight,
      chatArrayRef.current.clientHeight,
    ));
    chatArrayRef.current.scrollBy({ top: chatArrayHeight, behavior: 'smooth' });
  });

  return (
    <div className={classes.root}>
      <div ref={chatArrayRef} className={classes.chatWindow}>
        <Message {...props} />
      </div>
    </div >
  );
};