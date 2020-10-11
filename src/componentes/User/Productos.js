import React, { useEffect, useState } from 'react'
import { Grid, FormControl, Input, FormHelperText, InputLabel, Typography, FormLabel, FormGroup, Container, Button, Select, Paper } from '@material-ui/core'
import { useForm } from '../../hooks/useForm'
import { addNegocio } from '../../peticiones/Negocios/addNegocio'
import Alert from '@material-ui/lab/Alert';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

import { getCategorias } from '../../peticiones/productos/getCategorias';
import { useFetchCategories } from '../../hooks/useFetchCategories';
import { useDispatch, useSelector } from 'react-redux';
import { useFetchProducts } from '../../hooks/useFetchProducts';
import { addCategoria} from '../../peticiones/productos/addCategoria';
import {  selectCategory } from '../../actions/business';
import { addProducto } from '../../peticiones/productos/addProducto';
import CircularProgress from '@material-ui/core/CircularProgress';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { viewBusiness, viewProductos } from '../../actions/users';
import { AddProduto } from './Formularios/AddProduto';
import { Producto } from './Producto';




export const Productos = () => {
    
    const {id,selected,idCategory} = useSelector( state => state.business );
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [formularioProductos, setformularioProductos] = useState(false)
    const [agregarP, setagregarP] = useState(false)
    const { data: productos , loading : loadingP} = useFetchProducts(id,idCategory) ;
    const [categoria, setcategoria] = useState([])
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
 
 
  
     const handleBack = ()=>{
      // setaddMenu(false)
      setagregarP(false)
      // dispatch(viewProductos())
      // setInfo(true)
   }
    const handleClose = () => {
        setOpen(false);
      };
      const handleAgregarMenus = () => {
              setformularioProductos(true)
              setOpen(false)         
      }
      const handleAgregarProducto = () => {
               setagregarP(true)
      } 
      console.log(agregarP)
    return (
        
        <Container spacing={3}>
           <Typography variant='h3'>Productos</Typography>
         { 
             (agregarP) ? <AddProduto handleBack={handleBack}/> :  (loadingP) ?  <CircularProgress /> :
               
               <>
               <Producto id={id} idCategory={idCategory}/> 
               
               <Grid item xs={6} md={3}>
                <FormControl component="fieldset">
                  <Button variant="contained" color="secondary" onClick={handleAgregarProducto}>Agregar Productos </Button>
      
                </FormControl>
               </Grid>  
               </>
               
               
            }
            {/* {
                (formularioProductos) && <AddProduto/>
            } */}
         
        {
        (formularioProductos) && <AddProduto handleBack={handleBack}/>
      }
       
        </Container>
    )
}