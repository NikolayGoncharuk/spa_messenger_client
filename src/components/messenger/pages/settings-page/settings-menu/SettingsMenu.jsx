import React from 'react';
// Styles
import { makeStyles } from '@material-ui/core/styles';
// Styled Components
import { Typography, IconButton } from '@material-ui/core';
// Icons
import ChatIcon from '@material-ui/icons/Chat';
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import BrightnessLowIcon from '@material-ui/icons/BrightnessLow';
// Components
import SettingsMenuList from './settings-menu-list/SettingsMenuList';

const useStyles = makeStyles(theme => ({
  dialogsContainer: {
    position: 'fixed',
    height: '100%',
    overflow: 'auto',
    padding: theme.spacing(0, 6),
    '&::-webkit-scrollbar': {
      width: '0px',
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: '100px',
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0, 0, 0, 0.0)',
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
    },
  },
  dialogsTop: {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gridGap: theme.spacing(2),
    padding: theme.spacing(3, 0, 0, 0),
  },
  dialogsTopLogo: {
    marginTop: '4px',
  },
  dialogsTitle: {
    padding: theme.spacing(3, 0),
    display: 'flex',
    justifyContent: 'space-between',
  },
  searchWrapper: {
    position: 'sticky',
    top: 0,
    padding: theme.spacing(1, 2),
    display: 'flex',
    zIndex: theme.zIndex.appBar,
  },
  searchDivider: {
    height: 28,
    margin: theme.spacing('auto', '4px'),
  },
}));

export default function SettingsMenu() {
  const classes = useStyles();
  const settingsMenuRef = React.useRef();
  const [settingsMenuWidth, setSettingsMenuWidth] = React.useState(null);

  React.useEffect(() => {
    function getSettingsMenuRefWidth() {
      if (settingsMenuRef.current) {
        return (Math.max(
          settingsMenuRef.current.scrollWidth,
          settingsMenuRef.current.offsetWidth,
          settingsMenuRef.current.clientWidth,
        ));
      };
    };
    setSettingsMenuWidth(getSettingsMenuRefWidth());
    window.addEventListener('resize', () => {
      setSettingsMenuWidth(getSettingsMenuRefWidth());
    });
  }, []);

  return (
    <div ref={settingsMenuRef}>
      <div style={{ width: settingsMenuWidth }} className={classes.dialogsContainer}>

        <div className={classes.dialogsTop}>
          <ChatIcon className={classes.dialogsTopLogo} />
          <div>
            <Typography variant="subtitle2">Messenger</Typography>
            <Typography color="textSecondary" variant="caption">Почти как Телега, только не Телега</Typography>
          </div>
        </div>

        <div className={classes.dialogsTitle}>
          <Typography variant="h4">Настройки</Typography>
          <IconButton>
            <BrightnessHighIcon />
          </IconButton>
        </div>

        <SettingsMenuList />
      </div>
    </div>
  );
};