
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import FaceIcon from '@material-ui/icons/Face';
import { useSelector,useDispatch } from 'react-redux';
import { loggout } from '../../actions/auth';
import  '../../styles/userPrincipal.css'
import {Negocio} from './Negocio'
import BusinessIcon from '@material-ui/icons/Business';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import { Route, Link } from 'react-router-dom';



const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    justifyContent :'center',
    width: '100%',
    flexDirection:'row',
    padding: theme.spacing(3),
  },

}));

export const  UserPrincipal = ({history}) => {
  const classes = useStyles();
  const {info} = useSelector( state => state.user );
  const dispatch = useDispatch();
  console.log(info)

  const handleLogout = (e) => {
    dispatch(loggout())
    console.log("deslogueado")
}

const handleNegocios = (e) => {
      history.push('/negocios')
}
const handlePerfil = (e) => {

}

const handleMenus = (e) => {

}

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Name
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            
              <ListItem button key="profile" onClick={handlePerfil}>
                <ListItemIcon> <FaceIcon/> </ListItemIcon>
                <ListItemText primary="Perfil" />
              </ListItem>
              <ListItem button key="negocios" onClick={handleNegocios}>
                <ListItemIcon> <BusinessIcon/> </ListItemIcon>
                <ListItemText primary="Negocios" />
              </ListItem>
              <ListItem button key="menus" onClick={handleMenus}>
                <ListItemIcon> <MenuBookIcon/> </ListItemIcon>
                <ListItemText primary="Menus" />
              </ListItem>
           
          </List>
          <Divider />
          <List>
            
              <ListItem button key='logout' onClick={handleLogout}>
                <ListItemIcon> <ExitToAppIcon/> </ListItemIcon>
                <ListItemText primary='Salir' />
              </ListItem>
            
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
      
     
        <h1 className="title__content">Negocios</h1>
        <div className="content__negocio-index">
          <Negocio/>
          <Negocio/>
        </div> 
        
        

        </main>
    </div>
  );
}