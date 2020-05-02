import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
// Styled Components
import { Typography } from '@material-ui/core';
// Components
import DialogsField from './dialogs-field/DialogsField';
import ChatField from './chat-field/ChatField';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '500px 1fr',
    gridTemplateAreas: "'dialogs chat'",
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  dialogs: {
    display: 'block',
    gridArea: 'dialogs',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  chat: {
    gridArea: 'chat',
    marginRight: theme.spacing(6),
    [theme.breakpoints.down('sm')]: {
      marginRight: 0,
    },
  },
}));

const mapStateToProps = (state) => {
  return {
    dialogs: state.chat.dialogs,
  };
};

export default connect(mapStateToProps, {})(
  function ChatPage(props) {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        {props.dialogs.length > 0 ? (
          <React.Fragment>
            <div className={classes.dialogs}>
              <DialogsField dialogs={props.dialogs} />
            </div>
            <div className={classes.chat}>
              <ChatField />
            </div>
          </React.Fragment>
        ) : <Typography className={classes.textEmptyPage}>Выберите собеседника в списке контактов</Typography>}
      </div>
    );
  }
);