import React from 'react';
import { makeStyles, fade } from '@material-ui/core/styles';
import { Paper, InputBase, IconButton } from '@material-ui/core';
import MoodIcon from '@material-ui/icons/Mood';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1, 2),
    zIndex: theme.zIndex.appBar,
  },
  toolbarContainer: {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr auto',
    gridGap: theme.spacing(2),
  },
  inputBase: {
    padding: theme.spacing(2, 1, 2, 2),
    borderRadius: '25px',
    backgroundColor: fade(theme.palette.grey[500], 0.1),
  },
  iconsContainer: {
    display: 'flex',
  },
  inputScrollbar: {
    paddingRight: theme.spacing(2),
    '&::-webkit-scrollbar': {
      width: '8px',
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: '100px',
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0, 0, 0, 0.0)',
      backgroundColor: 'rgba(127, 127, 127, 0.3)',
    },
  },
}));

export default function ChatToolbar(props) {
  const { postMessage, selectedDialog, profile } = props;
  const classes = useStyles();
  const [message, setMessage] = React.useState('');

  const handleInput = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const participants = selectedDialog.participants;
    let participantId = null;
    for (let i = 0; i < participants.length; i++) {
      if (participants[i] !== profile._id) {
        participantId = participants[i];
      };
    };

    postMessage({ to: participantId, body: message });
    setMessage('');
  };

  return (
    <Paper component="form" className={classes.root}>
      <div className={classes.toolbarContainer}>
        <div>
          <IconButton>
            <MoodIcon />
          </IconButton>
        </div>
        <InputBase
          inputProps={{ className: classes.inputScrollbar }}
          className={classes.inputBase}
          rowsMin={1}
          rowsMax={10}
          fullWidth
          multiline={true}
          placeholder="Введите сообщение…"
          value={message}
          onChange={handleInput}
        />
        <div className={classes.iconsContainer}>
          <div>
            <IconButton>
              <AttachFileIcon />
            </IconButton>
          </div>
          <div>
            <IconButton
              type="submit"
              onClick={handleSubmit}
            >
              <SendIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </Paper>
  );
};