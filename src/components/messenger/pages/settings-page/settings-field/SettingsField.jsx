import React from 'react';
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

export default function SettingsField() {
  const classes = useStyles();
  const chatFieldRef = React.useRef();
  const [chatFieldWidth, setChatFieldWidth] = React.useState(null);

  React.useEffect(() => {
    function getChatFieldWidth() {
      if (chatFieldRef.current) {
        return (Math.max(
          chatFieldRef.current.scrollWidth,
          chatFieldRef.current.offsetWidth,
          chatFieldRef.current.clientWidth,
        ));
      };
    };
    setChatFieldWidth(getChatFieldWidth());
    window.addEventListener('resize', () => {
      setChatFieldWidth(getChatFieldWidth());
    });
  }, []);

  return (
    <div ref={chatFieldRef}>
      <div style={{ width: chatFieldWidth }} className={classes.chatContainer}>

      </div>
    </div>
  );
};