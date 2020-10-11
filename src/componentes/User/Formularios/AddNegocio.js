import React, { useState } from 'react'
import { Grid, FormControl, Input, FormHelperText, InputLabel, Typography, FormLabel, FormGroup, Container, Button } from '@material-ui/core'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Alert from '@material-ui/lab/Alert';
import { useForm } from '../../../hooks/useForm'
import { makeStyles } from '@material-ui/core/styles';
import { addNegocio } from '../../../peticiones/Negocios/addNegocio';
import { Maps } from '../Maps';
const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: '100%',
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

export const AddNegocio = ({handleBack}) => {
    const classes = useStyles()
    const [agregado, setagregado] = useState(false)
    const [formValues,handleInputChange,reset] = useForm({
        nombre: "",
        facebook : "",
        instagram : "" ,
        descripcion: "",
    
    })
    const handleAgregarNegocio = () => {
        
        addNegocio(nombre,facebook,instagram,descripcion).then(inf => {
            console.log(inf)
        })
        reset();
        setagregado(true);
    }
      
    const {nombre,facebook,instagram,descripcion} = formValues;
   
    return (
        <Container maxWidth="md">
              <Grid container spacing={1}>
                <Grid item xs={12} lg={12}>
                <Typography variant="h4" >Ingrese su empresa </Typography>
                </Grid>
                <Grid item xs={12} md={12}>
                     
                    <FormControl component="fieldset" className={classes.formControl}>
                      <InputLabel>Nombre</InputLabel>
                      <Input value={nombre} name="nombre" onChange={handleInputChange}></Input>
                      
                      <FormHelperText></FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                <FormControl component="fieldset" className={classes.formControl}>
                      <InputLabel>Facebook</InputLabel>
                      <Input  value={facebook} name="facebook" onChange={handleInputChange}></Input>
                      
                      <FormHelperText></FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                <FormControl component="fieldset" className={classes.formControl}>
                      <InputLabel>Instagram</InputLabel>
                      <Input value={instagram} name="instagram" onChange={handleInputChange}></Input>
                      
                      <FormHelperText></FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={12}>
                <FormControl component="fieldset" className={classes.formControl}>
                      
                      <TextareaAutosize style={{width:'350px'}} aria-label="maximum height" rowsMin={3} placeholder="Descripción" onChange={handleInputChange} name="descripcion" value={descripcion}/>
                      
                      <FormHelperText></FormHelperText>
                    </FormControl>
                
                </Grid>
               <Grid item xs={12}>
                 <Typography variant="h6" >Ubicacion</Typography>
               <Maps />
               </Grid>
                <Grid item xs={12} md={6}>
                <Button variant="contained" color="primary" onClick={handleAgregarNegocio}> Agregar </Button>
                <Button variant="contained" color="secondary" onClick={handleBack}> Volver atras </Button>
                </Grid>
              
            </Grid>
         
            {
                 (agregado) &&  <Alert severity="success">Se ha agregado el negocio, puede visualizarlo en la pestaña NEGOCIOS</Alert>
            }
            </Container>
            

    )
}
