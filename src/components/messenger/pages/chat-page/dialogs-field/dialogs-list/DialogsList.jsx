import React from 'react';
import { connect } from 'react-redux';
// STyles
import { makeStyles } from '@material-ui/core/styles';
// Icons
import DoneAllIcon from '@material-ui/icons/DoneAll';
// Styled Components
import StyledBadge from '../../../../../../styles/styled-components/StyledBadge';
import { List, ListItem, ListItemText, ListItemAvatar } from '@material-ui/core';
import { Divider, Typography, Avatar, Paper, Box } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2, 0),
  },
  listItemTag: {
    marginLeft: theme.spacing(1),
    display: 'grid',
    gridTemplateColumns: 'auto',
    gridTemplateRows: '28px 18px',
    justifyItems: 'end',
    alignItems: 'end',
  },
  skeletonWrapper: {
    width: '100%',
  },
}));

const mapStateToProps = (state) => ({
  users: state.users.users,
});

export default connect(mapStateToProps, {})(
  function DialogsList(props) {
    const { dialogs, loading } = props;
    const classes = useStyles();

    const bootArray = new Array(10);

    function setDialogsItems() {
      return (
        (loading ? Array.from(bootArray) : dialogs).map((item, index) => {
          return (
            <React.Fragment key={index}>
              <ListItem button={!loading} alignItems="flex-start">
                <ListItemAvatar>
                  {item ?
                    <StyledBadge
                      invisible={!item.status}
                      overlap="circle"
                      anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }}
                      variant="dot"
                    >
                      <Avatar alt={`${item.firstName} ${item.lastName}`} src={item.avatar} />
                    </StyledBadge> :
                    <Skeleton variant="circle" width={40} height={40} />
                  }
                </ListItemAvatar>
                {item ?
                  <ListItemText
                    primary={`${item.firstName} ${item.lastName}`}
                    primaryTypographyProps={{ noWrap: true }}
                    secondary="Maximum number of rows to display when multiline option is set to true."
                    secondaryTypographyProps={{ noWrap: true }}
                  /> :
                  <Box pt={0.5} pb={1} className={classes.skeletonWrapper}>
                    <Skeleton height="24px" width="60%" />
                    <Skeleton />
                  </Box>
                }
                {item && <div className={classes.listItemTag}>
                  <Typography color="textSecondary" variant="caption">12.04</Typography>
                  <DoneAllIcon style={{ marginTop: '2px' }} fontSize="inherit" />
                </div>}
              </ListItem>
              {index + 1 < (item ? dialogs : bootArray).length && <Divider variant="inset" component="li" />}
            </React.Fragment>
          );
        })
      );
    };

    return (
      <Paper className={classes.root}>
        <List>
          {setDialogsItems()}
        </List>
      </Paper>
    );
  }
);