import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Grid, Typography } from '@material-ui/core';
import { useFetchMenus } from '../../hooks/useFetchMenus';
import { useSelector } from 'react-redux';

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
    
    const {id} = useSelector( state => state.user );
    const { data , loading } = useFetchMenus(id);
    console.log(data)
    return (
        <Grid container >
         { (!loading) && 
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
