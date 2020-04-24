import React from 'react';
// Form
import { reduxForm, Field } from 'redux-form';
import { renderInput } from '../../../services/render-field/RenderField';
import { required, minLength } from '../../../services/validation/validation';
// Icons
import LockIcon from '@material-ui/icons/Lock';
import MailIcon from '@material-ui/icons/Mail';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
// Styled Components
import { Typography, Button, Paper, Link, InputAdornment, IconButton } from '@material-ui/core';
import { FormControl } from '@material-ui/core';

export default reduxForm({ form: 'RegisterForm' })(function RegisterForm(props) {
  const { classes, setFormShow, handleSubmit, pristine, submitting, valid, formParams } = props;
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <React.Fragment>
      <div className={classes.formTitle}>
        <Typography variant="h5">Зарегистрироваться</Typography>
        <Typography color="textSecondary" variant="caption">Чтобы пользоваться мессенджером необходима регистрация</Typography>
      </div>
      <Paper component="form" onSubmit={handleSubmit} className={classes.formBody}>
        <FormControl className={classes.FormControl}>
          <Field
            name="email"
            component={renderInput}
            validate={[required]}
            placeholder="Эл. почта"
            type="email"
            startAdornment={
              <InputAdornment position="start">
                <MailIcon {...formParams.inputIcon} />
              </InputAdornment>
            }
            helperText="Введите адрес электронной почты."
            {...formParams.input}
          />
        </FormControl>

        <FormControl className={classes.FormControl}>
          <Field
            name="password"
            component={renderInput}
            validate={[required, minLength]}
            placeholder="Пароль"
            type={showPassword ? 'text' : 'password'}
            startAdornment={
              <InputAdornment position="start">
                <LockIcon {...formParams.inputIcon} />
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  size="small"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <Visibility {...formParams.inputIcon} /> : <VisibilityOff {...formParams.inputIcon} />}
                </IconButton>
              </InputAdornment>
            }
            helperText="Введите пароль."
            {...formParams.input}
          />
        </FormControl>

        <FormControl className={classes.FormControl}>
          <Field
            name="rePassword"
            component={renderInput}
            validate={[required, minLength]}
            placeholder="Пароль"
            type="password"
            startAdornment={
              <InputAdornment position="start">
                <LockIcon {...formParams.inputIcon} />
              </InputAdornment>
            }
            helperText="Повторите введенный пароль."
            {...formParams.input}
          />
        </FormControl>

        <Button
          type="submit"
          disabled={!valid || pristine || submitting}
          className={classes.authBatton}
          fullWidth={true}
          variant="contained"
          color="primary"
        >Зарегистрироваться</Button>

        <Link
          className={classes.link}
          onClick={() => setFormShow('LoginForm')}
          color="textSecondary"
          variant="caption"
        >Уже зарегистрированы?</Link>
      </Paper>
    </React.Fragment>
  );
});