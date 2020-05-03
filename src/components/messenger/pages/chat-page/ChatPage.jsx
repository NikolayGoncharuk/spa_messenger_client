import React from 'react';
import { connect } from 'react-redux';
import { getDialogs, getMessages } from '../../../../store/reducers/chatReducer';
// Styles
import { makeStyles } from '@material-ui/core/styles';
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

const mapStateToProps = (state) => ({
  users: state.users.users,
  profile: state.auth.profile,
  dialogs: state.chat.dialogs,
  messages: state.chat.messages,
});

export default connect(mapStateToProps, { getDialogs, getMessages })(
  function ChatPage(props) {
    const classes = useStyles();
    const [selectedDialog, setSelectedDialog] = React.useState(null);

    return (
      <div className={classes.root}>
        <div className={classes.dialogs}>
          <DialogsField {...props}
            selectedDialog={selectedDialog}
            setSelectedDialog={setSelectedDialog}
          />
        </div>
        <div className={classes.chat}>
          <ChatField
            profile={props.profile}
            messages={props.messages}
            getMessages={props.getMessages}
            selectedDialog={selectedDialog}
          />
        </div>
      </div>
    );
  }
);