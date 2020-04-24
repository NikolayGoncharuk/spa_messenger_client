import React from 'react';
//Components
import LoginForm from './forms/LoginForm';
import RegisterForm from './forms/RegisterForm';
// Styles
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
  },
  form: {
    width: '300px',
    margin: 'auto auto auto auto',
  },
  formTitle: {
    padding: theme.spacing(0, 0, 2, 0),
    textAlign: 'center',
  },
  formBody: {
    padding: theme.spacing(4, 4, 4, 4),
    textAlign: 'center',
  },
  FormControl: {
    paddingBottom: theme.spacing(2),
  },
  authBatton: {
    margin: theme.spacing(1, 0, 2, 0),
  },
  link: {
    cursor: 'pointer',
  },
}));

export default function StartPage() {
  const classes = useStyles();
  const [formShow, setFormShow] = React.useState('LoginForm');

  const onSubmitLoginForm = (formData) => {
    console.log(formData);
  };

  const onSubmitRegisterForm = (formData) => {
    console.log(formData);
  };

  const formParams = {
    input: {
      required: true,
      fullWidth: true,
    },
    inputIcon: {
      color: 'action',
      fontSize: 'inherit',
    },
  };

  function setForm() {
    if (formShow === 'LoginForm') {
      return <LoginForm
        onSubmit={onSubmitLoginForm}
        classes={classes}
        formParams={formParams}
        setFormShow={setFormShow}
      />;
    } else if (formShow === 'RegisterForm') {
      return <RegisterForm
        onSubmit={onSubmitRegisterForm}
        classes={classes}
        formParams={formParams}
        setFormShow={setFormShow}
      />;
    };
  };

  return (
    <div className={classes.root}>
      <div className={classes.form}>
        {setForm()}
      </div>
    </div>
  );
};