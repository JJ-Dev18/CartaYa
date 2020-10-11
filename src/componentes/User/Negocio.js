import React from 'react'
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
import { Button, Grid, Box, FormControl } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Tooltip from '@material-ui/core/Tooltip';
import { useFetchBusiness } from '../../hooks/useFetchBusiness';
import { useDispatch } from 'react-redux';
import { businessSelected } from '../../actions/business';
const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
      margin: 0,
      '&:hover': {
        backgroundColor: '#3f51b5',
        cursor: 'pointer'
      },
  
      
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
export const Negocio = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { data , loading } = useFetchBusiness()
    const [expanded, setExpanded] = React.useState(false);
    const handleSeleccionarNegocio = (id) => {
        const selected = true 
        dispatch(businessSelected(id,selected))
}
const handleExpandClick = () => {
    setExpanded(!expanded);
  };
    return (
        <>
            {
                 
              data.map(inf => (
                <Grid item xs={12} md={6} lg={4} key={inf.id} >
                <Box  >
                <Card className={classes.root} onClick={() => handleSeleccionarNegocio(inf.id)} >
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
              ))
            }
        </>
    )
}
