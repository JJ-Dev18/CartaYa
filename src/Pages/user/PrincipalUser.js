import React, { useState , useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';

import { useSelector, useDispatch } from 'react-redux';
import { keepSesion, loggout, login } from '../../actions/auth';
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
import {viewBusiness,viewProfile,viewHome,viewCards, viewProductos} from '../../actions/users'
import { Custom } from '../../componentes/User/Custom';
import { Productos } from '../../componentes/User/Productos';
import { businessSelected } from '../../actions/business';
import Cookies from 'universal-cookie'




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
    
    const cookies = new Cookies()
    const [abrir, setAbrir] = useState(false)
    const [name, setName] = useState(null);
    const classes = useStyles();
    const {openHome,openProfile,openBusiness,openCards,viewMenu,openProductos} = useSelector( state => state.user );
    const dispatch = useDispatch();
   
    console.log(viewMenu)
    const init = () => {
      return   JSON.parse(localStorage.getItem('token') )|| []
    }
    
  
   useEffect(() => {
       getInfoUser().then(inf => {
             
         setName(inf.name)
      
       })
   }, [name])

  
    
    const handleLogout = (e) => {
        dispatch(loggout())
        
        cookies.remove('token')
        console.log("deslogueado")
    }

    const handleNegocios = (e) => {
        dispatch(viewBusiness())
        setAbrir(!abrir)
      
    }
    const handlePerfil = (e) => {
        dispatch(viewProfile())
        setAbrir(!abrir)
    }

    const handleMenus = (e) => {
         dispatch(viewCards())
         setAbrir(!abrir)
    }
    const handleInicio = (e) => {
        dispatch(viewHome())
        setAbrir(!abrir)
    }
    const handleProductos = () => {
        dispatch(viewProductos())
        setAbrir(!abrir)
    }
    const handleDrawer = (e) => {

        setAbrir(!abrir)
    }
    const handleCambiar= () => {
        dispatch(businessSelected("",false))
        dispatch(viewHome())
    }
    const handleAgregar = () => {
        dispatch(viewHome())
      
      }
      
    return (
        <div className={classes.root}>
            <CssBaseline />
            <NavBar name={name} handleDrawer={handleDrawer} handleCambiar={handleCambiar}/>
            <Hidden xsDown>
                <DrawerUser
                    variant="permanent"
                    open={true}
                    handleLogout={handleLogout}
                    handleInicio={handleInicio}
                    handleMenus={handleMenus}
                    handleNegocios={handleNegocios}
                    handlePerfil = {handlePerfil}
                    handleProductos={handleProductos}
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
                    handleProductos= {handleProductos}

                />
            </Hidden>
            <main className={classes.content}>
                <Toolbar />
                {
                    (openHome) &&  <Home/>
                }
                {
                    (openBusiness) && <Negocios handleAgregar={handleAgregar}/>
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
                {
                     (openProductos) && <Productos/>
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