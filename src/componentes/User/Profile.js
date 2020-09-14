import React, { useState, useEffect } from 'react'
import { Container, Grid, Typography, FormControl, InputLabel, Input, Button, TextField, InputAdornment } from '@material-ui/core'
import { useForm } from '../../hooks/useForm'
import { getInfoUser } from '../../helpers/getInfoUser'
import { AccountCircle } from '@material-ui/icons'
import PhoneIcon from '@material-ui/icons/Phone';
import DnsIcon from '@material-ui/icons/Dns';
import EmailIcon from '@material-ui/icons/Email';

export const Profile = () => {

  const [state, setState] = useState({})
  const handleEditar = () => {
    console.log('yes')
  }
  const handleGuardar = () => {
    console.log('guardado')
  }

  useEffect(() => {

    getInfoUser().then(inf => {
      setState(inf);
    })
  }, [])
  const { name, lastName, phone, address, email } = state;
  // const initialState = {
  //    nombre : "",
  //    apellido : "",
  //    telefono : "",
  //    direccion : "",
  //    mail : "",
  // }

  // const {nombre,apellido,telefono,direccion,mail} = formValues;
  console.log(state)
  return (
    <Container maxWidth="md" justify="flex-start">
      <Grid container spacing={1}>
        <Grid item xs={12} lg={12}>
          <Typography variant="h3" >Perfil </Typography>
        </Grid>
        <Grid item xs={12} md={6}>

          <FormControl component="fieldset">


            <InputLabel htmlFor="input-with-icon-adornment">Nombre</InputLabel>
            <Input
            disabled
              id="input-with-icon-adornment"
              value={name}
              onChange={e => setState({ name: e.target.value })}
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl component="fieldset">

            <InputLabel htmlFor="input-with-icon-adornment">Apellido</InputLabel>
            <Input
            disabled
              id="input-with-icon-adornment"
              value={lastName}
              onChange={e => setState({ lastName: e.target.value })}
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl component="fieldset">
         
         
            <InputLabel htmlFor="input-with-icon-adornment">Telefono</InputLabel>
            <Input
            disabled
              id="input-with-icon-adornment"
              value={phone}
              onChange={e => setState({ phone: e.target.value })}
              startAdornment={
                <InputAdornment position="start">
                 <PhoneIcon/>
                </InputAdornment>
              }
            />

          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl component="fieldset">
           
            <InputLabel htmlFor="input-with-icon-adornment">Direccion</InputLabel>
            <Input
            disabled
              id="input-with-icon-adornment"
              value={address}
              onChange={e => setState({ address: e.target.value })}
              startAdornment={
                <InputAdornment position="start">
                  <DnsIcon/>
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={12}>
          <FormControl component="fieldset">


            <InputLabel htmlFor="input-with-icon-adornment">E-mail</InputLabel>
            <Input
            disabled
              id="input-with-icon-adornment"
              value={email}
              onChange={e => setState({ email: e.target.value })}
              startAdornment={
                <InputAdornment position="start">
                  <EmailIcon/>
                </InputAdornment>
              }
            />


          </FormControl>
        </Grid>
        <Grid item xs={6} md={6}>
          <FormControl component="fieldset">
            <Button variant="contained" onClick={handleEditar}>Editar </Button>

          </FormControl>
        </Grid>
        <Grid item xs={6} md={6}>
          <FormControl component="fieldset">
            <Button variant="contained" color="secondary" onClick={handleGuardar}>Guardar </Button>

          </FormControl>
        </Grid>

        <Grid item xs={12} md={6}>

        </Grid>

      </Grid>


    </Container>
  )
}
