import React from 'react'
import { AppBar, Toolbar, Typography ,makeStyles, Button} from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import '../../styles/user.css'
import { useSelector } from 'react-redux';

const estilos = makeStyles(theme => ({

    appBar :{
        [theme.breakpoints.up('sm')]: {
          width: `calc(100% - ${240}px)`,
          marginLeft: 240,
        },
        zIndex: theme.zIndex.drawer + 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
          display: 'none',
        },
      },
}))

export const NavBar = ({name,handleDrawer,handleCambiar}) => {
    const classes = estilos()
    const {id,selected} = useSelector( state => state.business );
    return (
        <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
        <IconButton edge="start" onClick={() => handleDrawer() } 
              className={classes.menuButton} color="inherit" aria-label="menu">
               <MenuIcon />
             </IconButton>
          <Typography variant="h6" noWrap>
            {name}
          </Typography>
          {
            (selected) && <div className="logout">  <Button variant="contained" color="secondary" onClick={handleCambiar} >Cambiar empresa</Button></div>
          }
          
        
        </Toolbar>
    
    
      </AppBar>
    )
}
