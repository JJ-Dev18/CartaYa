import React, { useEffect , useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Button, Grid, Box } from '@material-ui/core';
import { useFetchBusiness } from '../../hooks/useFetchBusiness';
import { useDispatch, useSelector } from 'react-redux';
import { addMenu, viewCards, viewHome } from '../../actions/users';
import {AddMenu} from '../../peticiones/Menus/addMenu'
import Tooltip from '@material-ui/core/Tooltip';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CircularProgress from '@material-ui/core/CircularProgress';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { businessSelected } from '../../actions/business';
import { InfoNegocio } from './InfoNegocio';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: 0,
    
    
  },
  contain:{
    display: 'flex',
    flexDirection: 'row'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export const Negocios = () =>  {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const { data , loading } = useFetchBusiness()
  const {id,selected} = useSelector( state => state.business );
  const theme = useTheme();
 
  const handleAgregarMenu = (id) => {
       dispatch(addMenu(id)) 
  }
  const handleVerMenus = (id) => {
       dispatch(viewCards(id))
       console.log(id)
  }
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
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
 const handleSeleccionarNegocio = (id) => {
         const selected = true 
         dispatch(businessSelected(id,selected))
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
       <Grid  className={classes.contain} container spacing={3} >
         
        
         <Grid item xs={12} >
            <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Error en negocios"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            No ha agregado ninguna empresa, por favor agregue primero una empresa 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Cerrar
          </Button>
          <Button onClick={handleAgregarNegocio} color="primary" autoFocus>
            Agregar
          </Button>
        </DialogActions>
      </Dialog>
          </Grid>
          
        {   (selected) ? <InfoNegocio/> :   (loading ) ?  <CircularProgress /> :

              data.map(inf => (
                <Grid item xs={12} md={6} lg={4} key={inf.id} >
                <Box  >
                <Card className={classes.root} >
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                     Logo
                    </Avatar>
                  }
                  // action={
                  //   <IconButton aria-label="settings">
                  //     <MoreVertIcon />
                  //   </IconButton>
                  // }
                  title={inf.title}
                  subheader="September 14, 2016"
                />
                <CardMedia
                  className={classes.media}
                  image="/assets/productos/plato.jpg"
                  title="Paella dish"
                />
                <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {inf.description}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <Tooltip title="Seleccionar negocio">
                  <IconButton aria-label="add to favorites" onClick={() => handleSeleccionarNegocio(inf.id)} className={classes.expand}>
                   <CheckCircleIcon fontSize="large" color="secondary" />
                  </IconButton>
                   </Tooltip>
                  
                  {/* <IconButton
                    className={clsx(classes.expand, {
                      [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </IconButton> */}
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                   
                  </CardContent>
                </Collapse>
              </Card>
              </Box>
        </Grid>
              )  )
        }
         
        </Grid>
    
  );
}