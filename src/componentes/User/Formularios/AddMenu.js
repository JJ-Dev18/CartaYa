import React, { useState } from 'react'
import { Grid, FormControl, Input, FormHelperText, InputLabel, Typography, FormLabel, FormGroup, Container, Button, Select } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from '../../../hooks/useForm'
import Alert from '@material-ui/lab/Alert';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { useDispatch, useSelector } from 'react-redux';
import {  viewBusiness, viewCards } from '../../../actions/users';
import {addMenu} from '../../../peticiones/Menus/addMenu'
const useStyles = makeStyles((theme) => ({
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
export const AddMenu = ({handleBack}) => {
    const classes = useStyles();
    const [agregadoMenu, setagregadoMenu] = useState(false)
    const {id,selected} = useSelector( state => state.business );
    const dispatch = useDispatch();
    const [formValues, handleInputChange, reset] = useForm({
        nombre: "",
        descripcion: "",
    })
    
    const { nombre, descripcion} = formValues;
    const handleAgregarMenus = () => {
        addMenu(id,nombre,descripcion).then( inf => {
            dispatch(viewCards(id))
        })
      setagregadoMenu(true)
    }
   
    return (
        <Grid container spacing={1}>
                <Grid item xs={12} lg={12}>
                    <Typography variant="h4" > Agregar Menu </Typography>
                </Grid>
                <Grid item xs={12} md={12}>

                    <FormControl component="fieldset" className={classes.formControl}>
                        <InputLabel>Nombre</InputLabel>
                        <Input value={nombre} name="nombre" onChange={handleInputChange}></Input>

                        <FormHelperText></FormHelperText>
                    </FormControl>
                </Grid>

                <Grid item xs={12} md={12}>
                    <FormControl component="fieldset" >

                        <TextareaAutosize style={{ width: '300px' }} aria-label="maximum height" rowsMin={3} placeholder="Descripción" onChange={handleInputChange} name="descripcion" value={descripcion} />

                        <FormHelperText></FormHelperText>
                    </FormControl>

                </Grid>


                <Grid item xs={12} md={6}>
                    <Button variant="contained" color="primary" onClick={handleAgregarMenus}> Agregar Menu</Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Button variant="contained" color="primary" onClick={handleBack}> Atras</Button>
                </Grid>
                {
                    (agregadoMenu) && <Alert severity="success">Se ha agregado el Menu, seleccione atras para visualizarlo</Alert>
            }
            </Grid>
            

           
    )
}
