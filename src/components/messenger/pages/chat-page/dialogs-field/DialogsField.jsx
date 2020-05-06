import React from 'react';
import socketIOClient from 'socket.io-client';
// Hooks
import useWidth from '../../../hooks/useWidth';
import useSearch from '../../../hooks/useSearch';
// Styles
import { makeStyles } from '@material-ui/core/styles';
// Styled Components
import Typography from '@material-ui/core/Typography';
// Components
import Top from '../../../top/Top';
import DialogsList from './dialogs-list/DialogsList';
import Search from '../../../search/Search';

const useStyles = makeStyles(theme => ({
  container: {
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
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0),
    },
  },
  title: {
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 2),
    },
  },
}));

export default function DialogsField(props) {
  const { dialogs, profile } = props;
  const classes = useStyles();
  const dialogsRef = React.useRef();
  const [dialogsWidth, setDialogsWidth] = React.useState(null);
  const [localDialogs, setLocalDialogs] = React.useState(null);
  const [searchValue, setSearchValue] = React.useState('');

  React.useEffect(() => {
    setLocalDialogs(dialogs);
  }, [dialogs]);

  React.useEffect(() => {
    let socket = socketIOClient(process.env.REACT_APP_API_URL);
    socket.on('messages', () => props.getDialogs());
  }, []);

  useWidth(dialogsRef, setDialogsWidth);
  useSearch(dialogs, profile, searchValue, setLocalDialogs);

  return (
    <div ref={dialogsRef}>
      <div style={{ width: dialogsWidth }} className={classes.container}>
        <div className={classes.title}>
          <Top />
          <Typography variant="h4">Мои диалоги</Typography>
        </div>
        <Search
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        {(props.loading || (localDialogs && localDialogs.length > 0)) && (
          < DialogsList
            localDialogs={localDialogs}
            selectedDialog={props.selectedDialog}
            setSelectedDialog={props.setSelectedDialog}
            loading={props.loading}
            profile={props.profile}
            users={props.users}
          />
        )}
      </div>
    </div>
  );
};