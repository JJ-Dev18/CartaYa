import React, { useEffect , useState } from 'react';

import { Button, Grid, Box, FormControl } from '@material-ui/core';
import { useFetchBusiness } from '../../hooks/useFetchBusiness';
import { useDispatch, useSelector } from 'react-redux';
import { addMenu, viewCards, viewHome } from '../../actions/users';
import {AddMenu} from '../../peticiones/Menus/addMenu'

import AddCircleIcon from '@material-ui/icons/AddCircle';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CircularProgress from '@material-ui/core/CircularProgress';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import FastfoodIcon from '@material-ui/icons/Fastfood';

import { businessSelected } from '../../actions/business';
import { InfoNegocio } from './InfoNegocio';
import { Negocio } from './Negocio';




export const Negocios = ({handleAgregar}) =>  {
  

  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const { data , loading } = useFetchBusiness()
  const {id,selected} = useSelector( state => state.business );
  const theme = useTheme();
  const [estado, setEstado] = useState(selected)
  const handleAgregarMenu = (id) => {
       dispatch(addMenu(id)) 
  }
  const handleVerMenus = (id) => {
       dispatch(viewCards(id))
       console.log(id)
  }
  
  const handleClickOpen = () => {
    setOpen(true);
  };
 const handleAgregarNegocio = () => {
  dispatch(viewHome())
 }
 const handleAgregarProducto = () => {

 }
 const handleVerProductos = () => {

 }

  const handleClose = () => {
    setOpen(false);
  };
 
useEffect(() => {
   if(!loading) {
    if(data.length === 0){
      setOpen(true)
     }
   }
  
}, [loading])


const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
 



  return (
       <Grid  container spacing={3} >
         
       
          
        {    (loading ) ?  <CircularProgress /> :(selected) ? <InfoNegocio/> :  <Negocio/>
            
       
              
        }
        <Grid item xs={6} md={3}>
              <FormControl component="fieldset">
                <Button variant="contained" color="secondary" onClick={handleAgregar} >Agregar Negocio </Button>
    
              </FormControl>
            </Grid>
          
        </Grid>
    
  );
}