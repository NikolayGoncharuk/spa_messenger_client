import React from 'react';
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
    gridArea: 'dialogs',
  },
  chat: {
    gridArea: 'chat',
    display: 'block',
    marginRight: theme.spacing(6),
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

export default function ChatPage(props) {
  const classes = useStyles();
  const [selectedDialog, setSelectedDialog] = React.useState(null);

  return (
    <div className={classes.root}>
      <div className={classes.dialogs}>
        <DialogsField
          selectedDialog={selectedDialog}
          setSelectedDialog={setSelectedDialog}
          loading={props.loading}
          profile={props.profile}
          users={props.users}
          dialogs={props.dialogs}
          getDialogs={props.getDialogs}
        />
      </div>
      <div className={classes.chat}>
        {selectedDialog && (
          <ChatField
            selectedDialog={selectedDialog}
            profile={props.profile}
            messages={props.messages}
            getMessages={props.getMessages}
            postMessage={props.postMessage}
          />
        )}
      </div>
    </div>
  );
};