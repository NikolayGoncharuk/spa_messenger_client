import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { settingsMenuItems } from '../../../../../../services/routes/routes';
// Styled Components
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

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

  // Функция для выделения выбранного элемента списка меню
  const handleListItemClick = (item) => {
    setSelectedListItem(item);
  };

  // Перебираем все разделы меню
  const setSettingsMenu = () => {
    return Object.values(settingsMenuItems).map((item, index) => {
      return (
        <Paper className={classes.menuContainer}>
          <Typography variant="h6" className={classes.menuContainerTitle}>{item.title}</Typography>
          <List>
            {setSettingsMenuItems(item.items)}
          </List>
        </Paper>
      );
    });
  };

  // Перебираем все элементы списка раздела меню
  const setSettingsMenuItems = (parentItem) => {
    return Object.values(parentItem).map((item, index) => {
      return (
        <React.Fragment>
          <ListItem
            button
            disabled={item.disabled}
            alignItems="flex-start"
            selected={selectedListItem === item.primary}
            onClick={() => handleListItemClick(item.primary)}
          >
            {item.icon ? <ListItemIcon>{item.icon}</ListItemIcon> : null}
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              secondaryTypographyProps={{ noWrap: true }}
              primary={item.primary}
              secondary={item.secondary || null}
            />
          </ListItem>
          {index + 1 < Object.values(parentItem).length && < Divider variant={item.icon ? "inset" : null} component="li" className={item.icon ? null : classes.divider} />}
        </React.Fragment >
      );
    });
  };

  return (
    <div className={classes.root}>
      {setSettingsMenu()}
    </div>
  );
};