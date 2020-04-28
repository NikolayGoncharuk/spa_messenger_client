import React from 'react';
// Form
import { reduxForm, Field } from 'redux-form';
import { renderInput, renderCheckbox } from '../../../services/render-field/RenderField';
import { required, minLength } from '../../../services/validation/validation';
// Styled Components
import { Typography, Button, Paper, Link, InputAdornment, IconButton } from '@material-ui/core';
import { FormControl, FormControlLabel } from '@material-ui/core';
// Icons
import LockIcon from '@material-ui/icons/Lock';
import MailIcon from '@material-ui/icons/Mail';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

export default reduxForm({ form: 'LoginForm' })(function LoginForm(props) {
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
        <Typography variant="h5">Войти в аккаунт</Typography>
        <Typography color="textSecondary" variant="caption">Пожалуйста войдите в аккаунт</Typography>
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
          <FormControlLabel
            control={
              <Field
                name="rememberMe"
                component={renderCheckbox}
                color="default"
              />
            }
            label={<Typography color="textSecondary" variant="caption">Запомнить меня</Typography>}
          />
        </FormControl>

        <Button
          type="submit"
          disabled={!valid || pristine || submitting}
          className={classes.authBatton}
          fullWidth={true}
          variant="contained"
          color="primary"
        >Войти в аккаунт</Button>

        <Link
          className={classes.link}
          onClick={() => setFormShow('RegisterForm')}
          color="textSecondary"
          variant="caption"
        >Зарегистрироваться</Link>
      </Paper>
    </React.Fragment>
  );
});