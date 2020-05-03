import React from 'react';
import { customUseWidth } from '../../../customUseWidth';
// Styles
import { makeStyles } from '@material-ui/core/styles';
// Styles Components
import { IconButton, Typography } from '@material-ui/core';
// Icons
import CreateIcon from '@material-ui/icons/Create';
// Components
import Top from '../../../top/Top';
import DialogsList from './dialogs-list/DialogsList';
import Search from '../../../search/Search';

const useStyles = makeStyles(theme => ({
  dialogsContainer: {
    position: 'fixed',
    height: '100%',
    overflow: 'auto',
    padding: theme.spacing(0, 6),
    '&::-webkit-scrollbar': {
      width: '0px',
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: '100px',
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0, 0, 0, 0.0)',
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
    },
  },
  dialogsTitle: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

export default function DialogsField(props) {
  const classes = useStyles();
  const dialogsRef = React.useRef();
  const [dialogsWidth, setDialogsWidth] = React.useState(null);

  React.useEffect(() => {
    customUseWidth(dialogsRef, (value) => {
      setDialogsWidth(value);
    });
  }, []);

  return (
    <div ref={dialogsRef}>
      <div style={{ width: dialogsWidth }} className={classes.dialogsContainer}>
        <Top />
        <div className={classes.dialogsTitle}>
          <Typography variant="h4">Мои диалоги</Typography>
          <IconButton>
            <CreateIcon />
          </IconButton>
        </div>
        <Search />
        < DialogsList {...props} />
      </div>
    </div>
  );
};