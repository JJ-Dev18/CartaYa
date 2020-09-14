import React, { useState , useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';

import { useSelector, useDispatch } from 'react-redux';
import { loggout } from '../../actions/auth';
import '../../styles/userPrincipal.css'
// import {Negocio} from './Negocio'
import BusinessIcon from '@material-ui/icons/Business';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import { Route, Link } from 'react-router-dom';
import { NavBar } from '../../componentes/User/NavBar';
import { DrawerUser } from '../../componentes/User/Drawer';
import { Hidden, Typography, Box, Grid } from '@material-ui/core';
import { Negocios } from '../../componentes/User/Negocios';
import { Home } from '../../componentes/User/Home';

import { getInfoUser } from '../../helpers/getInfoUser';
import { userReducer } from '../../reducers/userReducer';
import { Menus } from '../../componentes/User/Menus';
import { Profile } from '../../componentes/User/Profile';
import {viewBusiness,viewProfile,viewHome,viewCards} from '../../actions/users'
import { Custom } from '../../componentes/User/Custom';





const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },

    content: {
        justifyContent: 'center',
        width: '100%',
        flexDirection: 'row',
        padding: theme.spacing(3),
    },

}));

export const PrincipalUser = ({ history }) => {
    
   
    const [abrir, setAbrir] = useState(false)
    const [name, setName] = useState(null);
    const classes = useStyles();
    const {openHome,openProfile,openBusiness,openCards,viewMenu} = useSelector( state => state.user );
    const dispatch = useDispatch();
    
    console.log(viewMenu)
  
    
  
   useEffect(() => {
       getInfoUser().then(inf => {
             
         setName(inf.name)
      
       })
   }, [name])
    
    const handleLogout = (e) => {
        dispatch(loggout())
        console.log("deslogueado")
    }

    const handleNegocios = (e) => {
        dispatch(viewBusiness())
      
    }
    const handlePerfil = (e) => {
        dispatch(viewProfile())
    }

    const handleMenus = (e) => {
         dispatch(viewCards())
    }
    const handleInicio = (e) => {
        dispatch(viewHome())
    }
    const handleDrawer = (e) => {

        setAbrir(!abrir)
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <NavBar name={name} handleDrawer={handleDrawer} />
            <Hidden xsDown>
                <DrawerUser
                    variant="permanent"
                    open={true}
                    handleLogout={handleLogout}
                    handleInicio={handleInicio}
                    handleMenus={handleMenus}
                    handleNegocios={handleNegocios}
                    handlePerfil = {handlePerfil}
                />
            </Hidden>
            <Hidden smUp>
                <DrawerUser
                    variant="temporary"
                    open={abrir}
                    onClose={handleDrawer}
                    handleLogout={handleLogout}
                    handleInicio={handleInicio}
                    handleMenus={handleMenus}
                    handleNegocios={handleNegocios}
                    handlePerfil = {handlePerfil}

                />
            </Hidden>
            <main className={classes.content}>
                <Toolbar />
                {
                    (openHome) &&  <Home/>
                }
                {
                    (openBusiness) && <Negocios/>
                }
                {
                    (viewMenu) && <Custom/>
                }
                {
                    (openCards) && <Menus/>
                }
                {
                    (openProfile) && <Profile/>
                }
               
                {/* <Typography variant="h3" className="title__content">Negocios</Typography>
                <Grid container>
                    <Grid item xs={12} md={6} lg={3}>
                        <Box className="content__negocio-index">
                            <Negocio />                        
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <Box className="content__negocio-index">
                            <Negocio/>
                            
                        </Box>
                    </Grid>
                    
                </Grid> */}




            </main>
        </div>
    );
}