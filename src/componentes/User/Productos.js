import React, { useEffect, useState } from 'react'
import { Grid, FormControl, Input, FormHelperText, InputLabel, Typography, FormLabel, FormGroup, Container, Button, Select, Paper } from '@material-ui/core'
import { useForm } from '../../hooks/useForm'
import { addNegocio } from '../../peticiones/Negocios/addNegocio'
import Alert from '@material-ui/lab/Alert';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { makeStyles } from '@material-ui/core/styles';
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
import { viewBusiness } from '../../actions/users';
import { AddProduto } from './Formularios/AddProduto';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: '100%',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },

    formCategoria: {
        marginTop: 100
    }
}));

export const Productos = () => {
    
    const {id,selected,idCategory} = useSelector( state => state.business );
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [formularioProductos, setformularioProductos] = useState(false)
  
    const { data: productos , loading : loadingP} = useFetchProducts(id,idCategory) ;
    const [categoria, setcategoria] = useState([])
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const classes = useStyles();
 
  
    useEffect(() => {
        if(!loadingP) {
         if(productos.length === 0){
           setOpen(true)
          }
        }
       
     }, [loadingP])
 
    const handleClose = () => {
        setOpen(false);
      };
      const handleAgregarMenus = () => {
          if(selected){
              setformularioProductos(true)
              setOpen(false)
          }
          else{
            dispatch(viewBusiness())
          }
       
        
      }
    return (
        
        <Container maxWidth="md">
                 <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Error en negocios"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {
                (selected) ? 'No ha agregado ningun producto, por favor agregue un producto' : 'No ha seleccionado ningun  negocio, por favor seleccione uno '
            }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Cerrar
          </Button>
          <Button onClick={handleAgregarMenus} color="primary" autoFocus>
           { (selected) ? 'Agregar Productos' : 'Seleccionar Empresa'}
          </Button>
        </DialogActions>
      </Dialog>
         {
              (loadingP) ?  <CircularProgress /> :
                productos.map(inf =>  (
                 <Grid item lg={4} key={inf.id}>
                 <div className={classes.root}>
                    
                     <Paper elevation={3} className={classes.paper} >
                       <Typography variant="h6" color="initial"> {inf.title}</Typography>
                       <hr></hr>
                       <div className={classes.desc}>
                        <Typography variant="body1"  color="initial" > {inf.description}</Typography>
                       </div>
                     </Paper>
                     
                  </div>
                 </Grid>
   
                ))
                
            }
            {/* {
                (formularioProductos) && <AddProduto/>
            } */}
         
           
        </Container>
    )
}