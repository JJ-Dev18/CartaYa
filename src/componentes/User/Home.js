import React, { useState } from 'react'
import { Grid, FormControl, Input, FormHelperText, InputLabel, Typography, FormLabel, FormGroup, Container, Button } from '@material-ui/core'
import { useForm } from '../../hooks/useForm'
import { addNegocio } from '../../peticiones/Negocios/addNegocio'
import Alert from '@material-ui/lab/Alert';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';


export const Home = () => {
 
    const [formValues,handleInputChange,reset] = useForm({
        nombre: "",
        facebook : "",
        instagram : "" ,
        descripcion: "",
    
    })
    const [agregado, setagregado] = useState(false)
    
    const {nombre,facebook,instagram,descripcion} = formValues;
    const handleAgregarNegocio = () => {
        
        addNegocio(nombre,facebook,instagram,descripcion).then(inf => {
            console.log(inf)
        })
        reset();
        setagregado(true);
    }
    console.log(nombre)
    return (
        <Container maxWidth="md">
            <Grid container spacing={1}>
                <Grid item xs={12} lg={12}>
                <Typography variant="h3" >Ingrese su empresa </Typography>
                </Grid>
                <Grid item xs={12} md={12}>
                     
                    <FormControl component="fieldset">
                      <InputLabel>Nombre</InputLabel>
                      <Input value={nombre} name="nombre" onChange={handleInputChange}></Input>
                      
                      <FormHelperText></FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                <FormControl component="fieldset">
                      <InputLabel>Facebook</InputLabel>
                      <Input  value={facebook} name="facebook" onChange={handleInputChange}></Input>
                      
                      <FormHelperText></FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                <FormControl component="fieldset">
                      <InputLabel>Instagram</InputLabel>
                      <Input value={instagram} name="instagram" onChange={handleInputChange}></Input>
                      
                      <FormHelperText></FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={12}>
                <FormControl component="fieldset">
                      
                      <TextareaAutosize style={{width:'350px'}} aria-label="maximum height" rowsMin={3} placeholder="Descripción" onChange={handleInputChange} name="descripcion" value={descripcion}/>
                      
                      <FormHelperText></FormHelperText>
                    </FormControl>
                
                </Grid>
                <Grid item xs={12} md={6}>
                <Button variant="contained" color="primary" onClick={handleAgregarNegocio}> Agregar </Button>
                </Grid>
              
            </Grid>
            {
                 (agregado) &&  <Alert severity="success">Se ha agregado el negocio, puede visualizarlo en la pestaña NEGOCIOS</Alert>
            }
           
        </Container>
    )
}
