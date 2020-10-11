import React from 'react'
import { Grid, FormControl, Input, FormHelperText, InputLabel, Typography, FormLabel, FormGroup, Container, Button, Select, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useFetchProducts } from '../../hooks/useFetchProducts';
import { useSelector } from 'react-redux';
const useStyles = makeStyles((theme) => ({
    root:{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(35),
            height: theme.spacing(15),
      
          },
    },
    paper: {
        
        '&:hover': {
            backgroundColor: 'red',
            cursor : 'pointer'
          },
    },
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
export const Producto = ({id,idCategory}) => {
    const classes = useStyles();
    const { data: productos , loading : loadingP} = useFetchProducts(id,idCategory) ;
    
    
    return (
        <Grid container spacing={3}>
            {  (loadingP) ?  <CircularProgress /> :
                productos.map(inf =>  (
              
                   <Grid item lg={3} key={inf.id}>
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
