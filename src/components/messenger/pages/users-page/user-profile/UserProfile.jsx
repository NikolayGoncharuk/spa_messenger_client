import React from 'react';
import { setDynamicWidth } from '../../../setDynamicWidth';
// Styles
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  userProfileContainer: {
    position: 'absolute',
    overflow: 'auto',
    height: '100%',
    padding: theme.spacing(3),
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

export default function UserProfile() {
  const classes = useStyles();
  const userProfileRef = React.useRef();
  const [userProfileWidth, setUserProfileWidth] = React.useState(null);

  React.useEffect(() => {
    setDynamicWidth(userProfileRef, (value) => {
      setUserProfileWidth(value);
    });
  }, []);

  return (
    <div ref={userProfileRef}>
      <div
        style={{ width: userProfileWidth }}
        className={classes.userProfileContainer}
      >

      </div>
    </div>
  );
};