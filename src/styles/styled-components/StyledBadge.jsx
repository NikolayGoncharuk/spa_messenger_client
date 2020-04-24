import { withStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import orange from '@material-ui/core/colors/orange'

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: orange[500],
    color: orange[500],
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2)',
      opacity: 0,
    },
  },
}))(Badge);

export default StyledBadge;