import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import songs from "./songs"
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Box from '@material-ui/core/Box';



const Playlist =() => {

  let canciones = [];

 // const classes = useStyles();
//Resultados de la busqueda
 const [songsResult,setSongsResult] = React.useState ([]);
 //songsResult->La cancion que coincide con la busqueda
 //setSongResult -> La funcion que permite guardar la coincidencia

const [searchSong,setSearchSong] = React.useState(""); 
//searchSong->es la cancion buscada(ingreso el usuario)
//setSearchSong->es la funcion que permite guardar la cancio buscada


///Ejecuta cuando el input cambia
//Agarra el valor(lo que escribio el usuario)
//Y lo guarda(setSearchSong)
const valorChange =(Input)=>{ 
  setSearchSong (Input.target.value);
}
//Se ejecuta cuando le doy a una tecla en el input
const summitSearch=(Input)=>{
  //Valido si la tecla fue el enter
  if(Input.key == "Enter") {
    let resultado = songs.find(s=> s.name == searchSong) 
    if(resultado){
      setSongsResult([resultado])
    }
}




}
  return (
    <Fragment> 
      <Grid container="bool" justify="center" alignItems="center" direction="column"></Grid>
      <Box m={5}>
        <FormControl>
      <InputLabel htmlFor="input-with-icon-adornment">Buscar</InputLabel>
      <Input onChange= {valorChange}  onKeyPress= {summitSearch}
        id="input-with-icon-adornment"
        startAdornment={
        <InputAdornment position="start">
            <AccountCircle />
          </InputAdornment>
        }
      />
      </FormControl>
      </Box>
    

    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell align="left">Nombre</TableCell>
                <TableCell align="left">Artista</TableCell>
                <TableCell align="left">Album</TableCell>
                <TableCell align="left">Duracion</TableCell>
                <TableCell align="left">Agregar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {songsResult.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
            <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{row.artist.name}</TableCell>
                <TableCell align="left">{row.album}</TableCell>
              <TableCell align="left">{row.duration}</TableCell>
                <TableCell align="left">Agregar</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Fragment>
  );
}

export default Playlist;