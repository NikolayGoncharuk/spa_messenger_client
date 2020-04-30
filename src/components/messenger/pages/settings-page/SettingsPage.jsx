import React from 'react';
// Styles
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
// Components
import SettingsMenu from './settings-menu/SettingsMenu';
import SettingsField from './settings-field/SettingsField';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '500px 1fr',
    gridTemplateAreas: "'settingsMenu settingsField'",
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  settingsMenu: {
    display: 'block',
    gridArea: 'settingsMenu',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  settingsField: {
    gridArea: 'settingsField',
    marginRight: theme.spacing(6),
    [theme.breakpoints.down('sm')]: {
      marginRight: 0,
    },
  },
}));

export default function SettingsPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.settingsMenu}>
        <SettingsMenu />
      </div>
      <div className={classes.settingsField}>
        <SettingsField />
      </div>
    </div>
  );
};