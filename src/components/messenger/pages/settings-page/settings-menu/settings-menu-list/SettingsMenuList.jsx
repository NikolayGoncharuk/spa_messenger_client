import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// Styled Components
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Divider, Paper, Typography } from '@material-ui/core';
// Icons
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import LanguageIcon from '@material-ui/icons/Language';
import TextsmsOutlinedIcon from '@material-ui/icons/TextsmsOutlined';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import PolicyOutlinedIcon from '@material-ui/icons/PolicyOutlined';

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
  const [selectedMenuItem, setSelectedMenuItem] = React.useState(null);

  const handleListItemClick = (item) => {
    setSelectedMenuItem(item);
  };

  const accountMenuItems = {
    email: {
      primary: 'goncharuk.bro@yandex.ru',
      secondary: 'Нажмите, чтобы изменить адрес электронной почты',
      disabled: false,
    },
    userName: {
      primary: '@nikolay_goncharuk',
      secondary: 'Нажмите, чтобы изменить имя пользователя',
      disabled: false,
    },
    about: {
      primary: 'О себе',
      secondary: 'Напишите немного о себе',
      disabled: false,
    },
  };

  const generalMenuItems = {
    sound: {
      primary: 'Уведомления и звук',
      icon: <NotificationsNoneIcon />,
      disabled: false,
    },
    privacy: {
      primary: 'Конфиденциальность',
      icon: <LockOpenIcon />,
      disabled: false,
    },
    chat: {
      primary: 'Настройки чатов',
      icon: <ChatBubbleOutlineIcon />,
      disabled: false,
    },
    language: {
      primary: 'Язык',
      icon: <LanguageIcon />,
      disabled: false,
    },
  };

  const helpMenuItems = {
    ask: {
      primary: 'Задать вопрос',
      icon: <TextsmsOutlinedIcon />,
      disabled: false,
    },
    questionsAbout: {
      primary: 'Вопросы о Messenger',
      icon: <HelpOutlineIcon />,
      disabled: false,
    },
    privacyPolicy: {
      primary: 'Политика конфиденциальности',
      icon: <PolicyOutlinedIcon />,
      disabled: false,
    },
  };

  const setAccountMenuItems = () => {
    return Object.values(accountMenuItems).map((item, index) => {
      return (
        <React.Fragment>
          <ListItem
            button
            disabled={item.disabled}
            alignItems="flex-start"
            selected={selectedMenuItem === item.primary}
            onClick={() => handleListItemClick(item.primary)}
          >
            <ListItemText
              primary={item.primary}
              primaryTypographyProps={{ noWrap: true }}
              secondary={item.secondary}
              secondaryTypographyProps={{ noWrap: true }}
            />
          </ListItem>
          {index + 1 < Object.values(accountMenuItems).length && < Divider className={classes.divider} component="li" />}
        </React.Fragment>
      );
    });
  };

  const setGeneralMenuItems = () => {
    return Object.values(generalMenuItems).map((item, index) => {
      return (
        <React.Fragment>
          <ListItem
            button
            disabled={item.disabled}
            alignItems="flex-start"
            selected={selectedMenuItem === item.primary}
            onClick={() => handleListItemClick(item.primary)}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText
              primary={item.primary}
              primaryTypographyProps={{ noWrap: true }}
            />
          </ListItem>
          {index + 1 < Object.values(generalMenuItems).length && < Divider variant="inset" component="li" />}
        </React.Fragment>
      );
    });
  };

  const setHelpMenuItems = () => {
    return Object.values(helpMenuItems).map((item, index) => {
      return (
        <React.Fragment>
          <ListItem
            button
            disabled={item.disabled}
            alignItems="flex-start"
            selected={selectedMenuItem === item.primary}
            onClick={() => handleListItemClick(item.primary)}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText
              primary={item.primary}
              primaryTypographyProps={{ noWrap: true }}
            />
          </ListItem>
          {index + 1 < Object.values(helpMenuItems).length && < Divider variant="inset" component="li" />}
        </React.Fragment>
      );
    });
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.menuContainer}>
        <Typography variant="h6" className={classes.menuContainerTitle}>Аккаунт</Typography>
        <List>
          {setAccountMenuItems()}
        </List>
      </Paper>
      <Paper className={classes.menuContainer}>
        <Typography variant="h6" className={classes.menuContainerTitle}>Основные</Typography>
        <List>
          {setGeneralMenuItems()}
        </List>
      </Paper>
      <Paper className={classes.menuContainer}>
        <Typography variant="h6" className={classes.menuContainerTitle}>Помощь</Typography>
        <List>
          {setHelpMenuItems()}
        </List>
      </Paper>
    </div>
  );
};