import { createMuiTheme } from '@material-ui/core/styles';

export default function makeTheme(props) {
  return createMuiTheme({
    palette: {
      type: (props.darkMode ? 'dark' : 'light'),
    },
    typography: {
      h1: {
        fontWeight: 700,
      },
      h2: {
        fontWeight: 700,
      },
      h3: {
        fontWeight: 700,
      },
      h4: {
        fontWeight: 700,
      },
      h5: {
        fontWeight: 700,
      },
      h6: {
        fontWeight: 700,
      },
    },

    props: {
      MuiInputBase: {
        fullWidth: true,
      },
      MuiAppBar: {
        color: 'default',
      },
      MuiPaper: {
        elevation: 5,
      },
      MuiSkeleton: {
        animation: 'wave',
      },
      MuiFormControl: {
        fullWidth: true,
      },
    },

    overrides: {
      MuiSkeleton: {
        text: {
          borderRadius: '8px',
        },
      },
    },
  });
}; 