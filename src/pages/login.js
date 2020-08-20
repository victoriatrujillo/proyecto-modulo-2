import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch'
    }
  }
}));

  const classes = useStyles();

function Login() {
  return (
    <form className={classes.root} noValidate autoComplete="off">
    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
  </form>
  );
}

export default Login;
