import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { accountSettingsMenu, generalSettingsMenu, helpSettingsMenu } from '../../../../../../services/routes/routes';
// Styled Components
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Divider, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(3),
  },
  menuContainer: {
    marginBottom: theme.spacing(2),
  },
  menuContainerTitle: {
    padding: theme.spacing(2, 2, 1, 2),
  },
  divider: {
    marginLeft: theme.spacing(2),
  },
}));

export default function SettingsMenuList() {
  const classes = useStyles();
  const [selectedListItem, setSelectedListItem] = React.useState(null);

  const handleListItemClick = (item) => {
    setSelectedListItem(item);
  };

  const setAccountSettingsMenu = () => {
    return Object.values(accountSettingsMenu).map((item, index) => {
      return (
        <React.Fragment>
          <ListItem
            button
            disabled={item.disabled}
            alignItems="flex-start"
            selected={selectedListItem === item.primary}
            onClick={() => handleListItemClick(item.primary)}
          >
            <ListItemText
              primary={item.primary}
              primaryTypographyProps={{ noWrap: true }}
              secondary={item.secondary}
              secondaryTypographyProps={{ noWrap: true }}
            />
          </ListItem>
          {index + 1 < Object.values(accountSettingsMenu).length && < Divider className={classes.divider} component="li" />}
        </React.Fragment>
      );
    });
  };

  const setGeneralSettingsMenu = () => {
    return Object.values(generalSettingsMenu).map((item, index) => {
      return (
        <React.Fragment>
          <ListItem
            button
            disabled={item.disabled}
            alignItems="flex-start"
            selected={selectedListItem === item.primary}
            onClick={() => handleListItemClick(item.primary)}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText
              primary={item.primary}
              primaryTypographyProps={{ noWrap: true }}
            />
          </ListItem>
          {index + 1 < Object.values(generalSettingsMenu).length && < Divider variant="inset" component="li" />}
        </React.Fragment>
      );
    });
  };

  const setHelpSettingsMenu = () => {
    return Object.values(helpSettingsMenu).map((item, index) => {
      return (
        <React.Fragment>
          <ListItem
            button
            disabled={item.disabled}
            alignItems="flex-start"
            selected={selectedListItem === item.primary}
            onClick={() => handleListItemClick(item.primary)}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText
              primary={item.primary}
              primaryTypographyProps={{ noWrap: true }}
            />
          </ListItem>
          {index + 1 < Object.values(helpSettingsMenu).length && < Divider variant="inset" component="li" />}
        </React.Fragment>
      );
    });
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.menuContainer}>
        <Typography variant="h6" className={classes.menuContainerTitle}>Аккаунт</Typography>
        <List>
          {setAccountSettingsMenu()}
        </List>
      </Paper>
      <Paper className={classes.menuContainer}>
        <Typography variant="h6" className={classes.menuContainerTitle}>Основные</Typography>
        <List>
          {setGeneralSettingsMenu()}
        </List>
      </Paper>
      <Paper className={classes.menuContainer}>
        <Typography variant="h6" className={classes.menuContainerTitle}>Помощь</Typography>
        <List>
          {setHelpSettingsMenu()}
        </List>
      </Paper>
    </div>
  );
};