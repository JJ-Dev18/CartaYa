import React from 'react'
import { Grid, FormControl, Input, FormHelperText, InputLabel, Typography, FormLabel, FormGroup, Container, Button } from '@material-ui/core'
import { useForm } from '../../hooks/useForm'
import { addNegocio } from '../../peticiones/Negocios/addNegocio'
import { getNegocios } from '../../peticiones/Negocios/getNegocios'

export const Home = () => {
 
    const [formValues,handleInputChange] = useForm({
        nombre: "",
        facebook : "",
        instagram : "" ,
    
    })
     
    const {nombre,facebook,instagram} = formValues;
    const handleAgregarNegocio = () => {
        
        addNegocio(nombre,facebook,instagram).then(inf => {
            console.log(inf)
        })
    }
   
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
                <Grid item xs={12} md={6}>
                <Button variant="contained" color="primary" onClick={handleAgregarNegocio}> Agregar </Button>
                </Grid>
              
            </Grid>
        </Container>
    )
}
