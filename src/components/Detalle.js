import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getDetailsById } from '../helper/fetch';
import pelicula from '../components/Pelicula';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';



const styles = {
  h1: {
    color: '#dcdcdc'
  }
};


export default function Detalle() {
  const {id} = useParams();
    
  const [detalle, SetDetalle] = useState();

  useEffect(()=>{
    (async ()=> {
        const detalle = await getDetailsById(id)
        SetDetalle(detalle);
        console.log(detalle);
    })();
  }, []);
  
  return (
    detalle &&
    <div align="center">
     
     
     <Card  sx={{
          mx: 'auto',
          width: 300,
          p: 0,
          m: 1,
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? '#101010' : 'grey.50',
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          borderRadius: 5,
          textAlign: 'center',
          fontSize: '0.875rem',
          fontWeight: '700',
        }}>
      <CardMedia
        component="img"
        //height="140"
        image = {`https://image.tmdb.org/t/p/w200${detalle.poster_path}`}
        tag = {detalle.tagline}
      />
      <CardContent>
      <Chip label={detalle.status} color="success" />

      <Divider variant="middle" component="li" />




        <Typography gutterBottom variant="h5" component="div">
        {detalle.original_title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {detalle.overview}
        </Typography>
        
        <Divider variant="middle" component="li" />
        <Typography variant="body2" color="text.secondary">
        Fecha de Lanzamiento{detalle.release_date} 
       

        </Typography>
        <Divider variant="middle"  />
        <Typography variant="body2" color="text.secondary">
        
        Puntaje: {detalle.vote_average}
        
        </Typography>
      </CardContent>
     

      <CardActions >
        
        <Button size="small" variant="contained"href={detalle.homepage}>Ver Ahora</Button>
      </CardActions>
    </Card>
    </div>
    
  )
}
