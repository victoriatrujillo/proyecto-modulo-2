import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import React, {Fragment} from 'react';
import Grid from '@material-ui/core/Grid';


const Login = () => {
  return (
    <Fragment>
      <Box boxShadow="3" mt={10} width="100%">
        <Grid container="true" direction="column" justify="center" alignItems="center">
          <Grid container="bool" direction="column" alignItems="center">
          
            <Box mt={2} width="30%">
              <TextField
                id="outlined-basic"
                fullWidth
                label="Correo electrónico"
                variant="outlined"/>
            </Box>
            <Box mt={4} width="30%"> 
              <TextField
                fullWidth="bool"  id="outlined-password-input" label="Contraseña" type="password"
                autoComplete="current-password"
                variant="outlined"/>
            </Box>
            <Box mt={3} width='30%'>
              <Button fullWidth variant="contained" color="secondary">COMENZAR A CREAR PLAYLISTS</Button>
            </Box>
            <Box mt={3} mb={3}>
              <Link href="#" color="secondary" variant='body2'>¿HAZ OLVIDADO LA CONTRASEÑA?</Link>
            </Box>
          </Grid>

        </Grid>
      </Box>
    </Fragment>

  );
}

export default Login;
