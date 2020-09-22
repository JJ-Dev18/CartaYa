import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Button, Grid, Typography } from '@material-ui/core';
import { useFetchMenus } from '../../hooks/useFetchMenus';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { viewBusiness } from '../../actions/users';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(35),
      height: theme.spacing(35),
      
    },
  },
  paper: {
    background: '#4ec',
    borderRadius: '30px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent:'space-around',
    alignItems: 'center',
    
  },
  desc : {
    
     display: 'flex',
     width: '50%',
     height: '50%'
  }
}));
export const Menus = () => {
    const classes = useStyles()
    const theme = useTheme();
    const {id,selected} = useSelector( state => state.business );
    const { data , loading } = useFetchMenus(id);
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();
  
    const handleAgregarMenus = () => {
      dispatch(viewBusiness())
      
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
  
  console.log(id,data)
    return (
        <Grid container >
           <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Error en Menus"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            No existe ningun menu, o no ha seleccionado ningun negocio, por favor dirijase a la pestaña negocios y seleccione o agregue un menu.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Cerrar
          </Button>
          <Button onClick={handleAgregarMenus} color="primary" autoFocus>
            Agregar
          </Button>
        </DialogActions>
      </Dialog>
         {  (loading) ?  <CircularProgress /> :
             data.map(inf =>  (
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
         
         
        </Grid>
        
    )
}
