import React from 'react';
import socketIOClient from 'socket.io-client';
import { customUseWidth } from '../../../customUseWidth';
// Styles
import { makeStyles } from '@material-ui/core/styles';
// Styles Components
import Typography from '@material-ui/core/Typography';
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
}));

export default function DialogsField(props) {
  const classes = useStyles();
  const dialogsRef = React.useRef();
  const [dialogsWidth, setDialogsWidth] = React.useState(null);
  const [localDialogs, setLocalDialogs] = React.useState(null);
  const [searchValue, setSearchValue] = React.useState('');

  React.useEffect(() => {
    customUseWidth(dialogsRef, (value) => {
      setDialogsWidth(value);
    });
  }, []);

  React.useEffect(() => {
    setLocalDialogs(props.dialogs);
  }, [props.dialogs]);

  React.useEffect(() => {
    let socket = socketIOClient(process.env.REACT_APP_API_URL);
    socket.on('dialogs', () => props.getDialogs());
  }, []);

  React.useEffect(() => {
    if (localDialogs) {
      const allDialogs = props.dialogs;

      // Убираем из массива авторизованного пользователя
      allDialogs.forEach((item) => {
        item.participantsObj = item.participantsObj.filter((item) => {
          return item._id !== props.profile._id;
        });
      });

      // Ищем совпадения по значению поиска
      const filteredDialogs = allDialogs.filter((item) => {
        const firstName = item.participantsObj[0].firstName;
        const lastName = item.participantsObj[0].lastName;
        const variant1 = `${firstName} ${lastName}`;
        const variant2 = `${lastName} ${firstName}`;
        const regExp = new RegExp(searchValue, 'i');
        return regExp.test(variant1) || regExp.test(variant2);
      });

      setLocalDialogs(filteredDialogs);
    };
  }, [searchValue]);

  return (
    <div ref={dialogsRef}>
      <div style={{ width: dialogsWidth }} className={classes.dialogsContainer}>
        <Top />
        <Typography variant="h4">Мои диалоги</Typography>
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