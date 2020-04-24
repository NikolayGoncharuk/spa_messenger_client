import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemAvatar, ListItemIcon, ListItemText } from '@material-ui/core';
import { Avatar, Divider } from '@material-ui/core';
import GroupIcon from '@material-ui/icons/Group';
import LockIcon from '@material-ui/icons/Lock';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
import ContactsIcon from '@material-ui/icons/Contacts';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import SettingsIcon from '@material-ui/icons/Settings';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import HelpIcon from '@material-ui/icons/Help';
import StyledBadge from '../../../styles/styled-components/StyledBadge';

const useStyles = makeStyles(theme => ({
  profileData: {
    marginLeft: theme.spacing(3),
    //padding: theme.spacing(2, 0, 2, 2),
    //display: 'grid',
    //gridTemplateColumns: 'auto calc(100% - 88px)',
    //gridGap: theme.spacing(3),
  },
  profileAvatar: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  profileName: {
    lineHeight: 1.2,
  },
}));

export default function Menu(props) {
  const classes = useStyles();

  return (
    <div>
      <List>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <StyledBadge
              invisible={false}
              overlap="circle"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }}
              variant="dot"
            >
              <Avatar className={classes.profileAvatar} alt="Николай Всеволодович" src="https://lifehacker.ru/special/asus-zenfone/assets/i/main/cutted/1.jpg" />
            </StyledBadge>
          </ListItemAvatar>
          <ListItemText
            className={classes.profileData}
            primary="Николай Всеволодович"
            primaryTypographyProps={{
              variant: 'h6',
              className: classes.profileName,
              gutterBottom: true,
            }}
            secondary="+7 (914) 548-34-84"
            secondaryTypographyProps={{
              noWrap: true,
              color: "textSecondary",
              variant: "body2",
            }}
          />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon><GroupIcon /></ListItemIcon>
          <ListItemText primary="Создать группу" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><LockIcon /></ListItemIcon>
          <ListItemText primary="Создать секретный чат" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><SpeakerNotesIcon /></ListItemIcon>
          <ListItemText primary="Создать канал" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><ContactsIcon /></ListItemIcon>
          <ListItemText primary="Контакты" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><BookmarkIcon /></ListItemIcon>
          <ListItemText primary="Избранное" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><SettingsIcon /></ListItemIcon>
          <ListItemText primary="Настройки" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon><PersonAddIcon /></ListItemIcon>
          <ListItemText primary="Пригласить друзей" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><HelpIcon /></ListItemIcon>
          <ListItemText primary="Вопросы о Messenger" />
        </ListItem>
      </List>
    </div>
  );
};

/*<div className={classes.profileData}>
  <Avatar className={classes.profileAvatar} alt="Николай Гончарук" src="https://lifehacker.ru/special/asus-zenfone/assets/i/main/cutted/1.jpg" />
  <div>
    <Typography className={classes.profileName} gutterBottom={true} variant="h6">Николай Всеволодович</Typography>
    <Typography noWrap color="textSecondary" variant="body2">Maximum number of rows to display when multiline option is set to true.</Typography>
    <Typography noWrap color="textSecondary" variant="body2">+7 (914) 548-34-84</Typography>
  </div>
</div >*/