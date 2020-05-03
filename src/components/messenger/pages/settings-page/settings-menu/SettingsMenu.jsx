import React from 'react';
import { connect } from 'react-redux';
import { setDarkMode } from '../../../../../store/reducers/themeReducer';
import { customUseWidth } from '../../../customUseWidth';
// Styles
import { makeStyles } from '@material-ui/core/styles';
// Styled Components
import { Typography, IconButton } from '@material-ui/core';
// Icons
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import BrightnessLowIcon from '@material-ui/icons/BrightnessLow';
// Components
import Top from '../../../top/Top';
import SettingsMenuList from './settings-menu-list/SettingsMenuList';

const useStyles = makeStyles(theme => ({
  settingsContainer: {
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
  settingsTitle: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

const mapStateToProps = (state) => {
  return {
    theme: state.theme,
  };
};

export default connect(mapStateToProps, { setDarkMode })(function SettingsMenu(props) {
  const classes = useStyles();
  const settingsMenuRef = React.useRef();
  const [settingsMenuWidth, setSettingsMenuWidth] = React.useState(null);

  React.useEffect(() => {
    customUseWidth(settingsMenuRef, (value) => {
      setSettingsMenuWidth(value);
    });
  }, []);

  const handleDarkMode = () => {
    props.setDarkMode();
  };

  return (
    <div ref={settingsMenuRef}>
      <div style={{ width: settingsMenuWidth }} className={classes.settingsContainer}>
        <Top />
        <div className={classes.settingsTitle}>
          <Typography variant="h4">Настройки</Typography>
          <IconButton onClick={handleDarkMode}>
            {props.theme.darkMode ? <BrightnessHighIcon /> : <BrightnessLowIcon />}
          </IconButton>
        </div>
        <SettingsMenuList />
      </div>
    </div>
  );
});