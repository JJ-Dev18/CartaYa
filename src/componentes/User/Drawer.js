
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import FaceIcon from '@material-ui/icons/Face';
import  '../../styles/userPrincipal.css'
import BusinessIcon from '@material-ui/icons/Business';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import HomeIcon from '@material-ui/icons/Home';



const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
 
  
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
 

}));

export const  DrawerUser = ({
  handlePerfil,handleNegocios,handleMenus,handleLogout,
  open,onClose,variant,handleInicio
}) => {
  
  const classes = useStyles()

  return (
    
      
      <Drawer
        className={classes.drawer}
        classes={{
          paper: classes.drawerPaper,
        }}
         variant={variant}
         anchor='left'
         open={open}
         onClose={onClose ? onClose : null  }
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            
          <ListItem button key="Inicio" onClick={handleInicio}>
                <ListItemIcon> <HomeIcon/> </ListItemIcon>
                <ListItemText primary="Inicio" />
              </ListItem>
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
     
    
  );
}