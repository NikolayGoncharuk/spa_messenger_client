import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Typography, Paper, Avatar } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  messageLeft: {
    marginRight: 'auto',
    gridTemplateAreas: "'avatar messageBody' 'empty messageTime'",
  },
  messageRight: {
    marginLeft: 'auto',
    gridTemplateAreas: "'messageBody avatar' 'messageTime empty'",
  },
  messageBodyLeft: {
    borderRadius: '30px 30px 30px 0',
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
  messageBodyRight: {
    borderRadius: '30px 30px 0 30px',
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
  messageTimeLeft: {
    textAlign: 'left',
  },
  messageTimeRight: {
    textAlign: 'right',
  },
  messageContainer: {
    display: 'flex',
    margin: theme.spacing(2, 0),
  },
  message: {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    gridTemplateRows: 'auto auto',
    gridColumnGap: theme.spacing(2),
    alignItems: 'end',
    maxWidth: '70%',
  },
  messageBody: {
    padding: theme.spacing(2, 3),
  },
  messageTime: {
    marginTop: theme.spacing(1),
    lineHeight: '100%',
  },
  gridAreaAvatar: {
    gridArea: 'avatar',
  },
  gridAreaMessageBody: {
    gridArea: 'messageBody',
  },
  gridAreaEmpty: {
    gridArea: 'empty',
  },
  gridAreaMessageTime: {
    gridArea: 'messageTime',
  },
}));

export default function ChatWindow(props) {
  const classes = useStyles();
  const arrayLength = 20;

  function setMessages() {
    return Array.from(new Array(arrayLength)).map((item, index) => {

      const message = clsx(classes.message, {
        [classes.messageLeft]: (index % 2 === 0),
        [classes.messageRight]: (index % 2 !== 0),
      });
      const messageBody = clsx(classes.messageBody, classes.gridAreaMessageBody, {
        [classes.messageBodyLeft]: (index % 2 === 0),
        [classes.messageBodyRight]: (index % 2 !== 0),
      });
      const messageTime = clsx(classes.messageTime, classes.gridAreaMessageTime, {
        [classes.messageTimeLeft]: (index % 2 === 0),
        [classes.messageTimeRight]: (index % 2 !== 0),
      });

      return (
        <div className={classes.messageContainer} key={index}>
          <div className={message}>
            <Avatar className={classes.gridAreaAvatar} alt="Роджер Гилл" src="" />
            <Paper elevation={0} className={messageBody}>
              <Typography>Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, "consectetur", и занялся его поисками в классической латинской литературе.</Typography>
            </Paper>
            <div className={classes.gridAreaEmpty}></div>
            <Typography color="textSecondary" component="p" variant="caption" className={messageTime}>Вчера, в 12:35</Typography>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      {setMessages()}
    </div>
  );
};