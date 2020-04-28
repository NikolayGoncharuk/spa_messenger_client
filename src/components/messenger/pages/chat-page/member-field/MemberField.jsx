import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, Paper, InputBase, IconButton, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import CreateIcon from '@material-ui/icons/Create';
import ChatIcon from '@material-ui/icons/Chat';
// Components
import MemberList from './member-list/MemberList';

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
  dialogsTop: {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gridGap: theme.spacing(2),
    padding: theme.spacing(3, 0, 0, 0),
  },
  dialogsTopLogo: {
    marginTop: '4px',
  },
  dialogsTitle: {
    padding: theme.spacing(3, 0),
    display: 'flex',
    justifyContent: 'space-between',
  },
  searchWrapper: {
    position: 'sticky',
    top: 0,
    padding: theme.spacing(1, 2),
    display: 'flex',
    zIndex: theme.zIndex.appBar,
  },
  searchDivider: {
    height: 28,
    margin: theme.spacing('auto', '4px'),
  },
}));

const mapStateToProps = (state) => ({
  users: state.users,
});

export default connect(mapStateToProps, {})(function MemberField() {
  const classes = useStyles();
  const dialogsRef = React.useRef();
  const [dialogsWidth, setDialogsWidth] = React.useState(null);

  React.useEffect(() => {
    function getDialogsRefWidth() {
      if (dialogsRef.current) {
        return (Math.max(
          dialogsRef.current.scrollWidth,
          dialogsRef.current.offsetWidth,
          dialogsRef.current.clientWidth,
        ));
      };
    };
    setDialogsWidth(getDialogsRefWidth());
    window.addEventListener('resize', () => {
      setDialogsWidth(getDialogsRefWidth());
    });
  }, []);

  return (
    <div ref={dialogsRef}>
      <div style={{ width: dialogsWidth }} className={classes.dialogsContainer}>

        <div className={classes.dialogsTop}>
          <ChatIcon className={classes.dialogsTopLogo} />
          <div>
            <Typography variant="subtitle2">Messenger</Typography>
            <Typography color="textSecondary" variant="caption">Почти как Телега, только не Телега</Typography>
          </div>
        </div>

        <div className={classes.dialogsTitle}>
          <Typography variant="h4">Мои диалоги</Typography>
          <IconButton>
            <CreateIcon />
          </IconButton>
        </div>

        <Paper component="form" className={classes.searchWrapper}>
          <InputBase
            placeholder="Поиск..."
            fullWidth
          />
          <IconButton type="submit">
            <SearchIcon />
          </IconButton>
          <Divider className={classes.searchDivider} orientation="vertical" />
          <IconButton>
            <AddIcon />
          </IconButton>
        </Paper>

        <MemberList />
      </div>
    </div>
  );
});