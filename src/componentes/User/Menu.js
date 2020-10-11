import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import moduleName from '../../styles/menu.css'

import CircularProgress from '@material-ui/core/CircularProgress';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import { Button, Container, FormControl, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useFetchMenus } from '../../hooks/useFetchMenus';
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(35),
        height: theme.spacing(35),
  
      },
    },
    paper: {
      background: 'Black',
      borderRadius: '30px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      color: 'white',
      border:'10px solid #eed09d',
      '&:hover': {
        backgroundColor: 'red',
        cursor: 'pointer'
      },
  
    },
    desc: {
  
      display: 'flex',
      width: '50%',
      height: '50%'
    }
  }));
export const Menu = ({id}) => {


    const classes = useStyles()
    const { data, loading } = useFetchMenus(id);
   
    return (
      <Grid container >
        
         {  (loading) ? <CircularProgress /> :
       
             data.map(inf => (
                 
                 <Grid item lg={4} key={inf.id}>
                   <div className={classes.root}>
     
                     <Paper elevation={3} className={classes.paper} onClick={() => { console.log('click')}}>
                       <Typography variant="h4" color="initial" className="tiza"> {inf.title}</Typography>
                      
                       <div className={classes.desc}>
                         <Typography variant="body1" color="initial" className="tiza" > {inf.description}</Typography>
                       </div>
                     </Paper>
     
                   </div>
                 </Grid>
                 ))
         }
          </Grid>
    )
}
