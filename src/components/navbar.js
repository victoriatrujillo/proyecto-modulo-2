import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import logo from '../imagenes/logoblaco.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  }
}));

function Navbar({estado}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Grid container direction="row" justify={!estado? "center" : "space-between"} alignItems="center">

            <img src={logo}></img>
            <Typography variant="h6" color="inherit">Mateify
            </Typography>
            {estado && <Typography>FotoPersona</Typography>}
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
