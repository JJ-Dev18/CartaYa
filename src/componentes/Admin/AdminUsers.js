import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import PeopleIcon from '@material-ui/icons/People'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { loggout } from '../../actions/auth';
import { useDispatch } from 'react-redux'
import { Button } from '@material-ui/core'
import '../../styles/user.css'
import {useSelector} from 'react-redux'
import AddUser from './AddUser';
import ListUser from './ListUser';
import { User } from './User';

//Pagina Principal del administrador despues de logged


const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {

    zIndex: theme.zIndex.drawer + 1,
    justifyContent: 'space_around',
    backgroundColor: '#999',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
export const AdminUsers = ({ history }) => {

  const dispatch = useDispatch();
  const classes = useStyles();
  const {info,showUser} = useSelector( state => state.user );
  console.log(info)
  const theme = useTheme();
  const [showUsers, setShowUsers] = useState(false) //Estado para mostrar el componente de la lista de usuarios 
  const [showAdd, setShowAdd] = useState(false) // Estado para mostrar el componente del formulario para agregar usuarios 
  
  const [open, setOpen] = React.useState(false); // Estado para abrir y cerrar  el drawer de admin 

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleLogout = (e) => {

    dispatch(loggout())
    history.push('/auth')
    console.log('deslogueado admin')
  }

  const handleUsuarios = (e) => {

    setShowUsers(!showUser)
    setShowAdd(false)

  }
  const handleAddUser = (e) => {
    setShowUsers(false)
    setShowAdd(true)
  }

  return (

    <div className={classes.root} >
      <CssBaseline />
      {/* Barra de navegacion Admin  */}
      <AppBar
        id="navBar"
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Administrador
          </Typography>
          {/* boton de logout  */}
          <div onClick={handleLogout} className="logout"><ExitToAppIcon /> Log out </div>
        </Toolbar>
      </AppBar>
      {/* Drawer de los iconos del admin  */}
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        {/* Iconos del Drawer  */}
        <List>
          {['Usuarios', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text} onClick={handleUsuarios}>
              <ListItemIcon>{index % 2 === 0 ? <PeopleIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>

      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />

        {
          // Lista de usuarios 
          (showUsers) && <div><h1>Usuarios <Button onClick={handleAddUser} variant="contained" endIcon={<PersonAddIcon />}>Agregar</Button></h1>  <ListUser /></div>
        }
        {
          // formulario para agregar usuarios
          (showAdd) && <AddUser />
        }
        {
          (showUser) && <div><h1>Usuario Seleccionado </h1> <User/> </div>
        }

      </main>
    </div>

  )
}
