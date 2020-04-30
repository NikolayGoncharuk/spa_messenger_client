import React from 'react';
// Styles
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  settingsContainer: {
    position: 'absolute',
    overflow: 'auto',
    height: '100%',
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

export default function SettingsField() {
  const classes = useStyles();
  const settingsFieldRef = React.useRef();
  const [settingsFieldWidth, setSettingsFieldWidth] = React.useState(null);

  React.useEffect(() => {
    function getSettingsFieldWidth() {
      if (settingsFieldRef.current) {
        return (Math.max(
          settingsFieldRef.current.scrollWidth,
          settingsFieldRef.current.offsetWidth,
          settingsFieldRef.current.clientWidth,
        ));
      };
    };
    setSettingsFieldWidth(getSettingsFieldWidth());
    window.addEventListener('resize', () => {
      setSettingsFieldWidth(getSettingsFieldWidth());
    });
  }, []);

  return (
    <div ref={settingsFieldRef}>
      <div
        style={{ width: settingsFieldWidth }}
        className={classes.settingsContainer}
      >

      </div>
    </div>
  );
};