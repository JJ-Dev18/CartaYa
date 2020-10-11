import React, { useState, useEffect } from 'react'
import { Container, Grid, Typography, FormControl, InputLabel, Input, Button, TextField, InputAdornment } from '@material-ui/core'
import { useForm } from '../../hooks/useForm'
import { getInfoUser } from '../../helpers/getInfoUser'
import { AccountCircle } from '@material-ui/icons'
import PhoneIcon from '@material-ui/icons/Phone';
import DnsIcon from '@material-ui/icons/Dns';
import EmailIcon from '@material-ui/icons/Email';
import CircularProgress from '@material-ui/core/CircularProgress';
import { getNegocios } from '../../peticiones/Negocios/getNegocios'
import { Custom } from './Custom'
import { AddMenu } from './Formularios/AddMenu'
import Alert from '@material-ui/lab/Alert';
import { useDispatch } from 'react-redux'
import { viewBusiness } from '../../actions/users'
import { businessSelected } from '../../actions/business'
import { AddProduto } from './Formularios/AddProduto'


export const InfoNegocio = () => {

  const [state, setState] = useState({})
  const [addMenu, setaddMenu] = useState(false)
  const [info, setInfo] = useState(true)
  const [formularioProductos, setformularioProductos] = useState(false)
  const dispatch = useDispatch();
  
  const handleEditar = () => {
    console.log('yes')
  }
  const handleGuardar = () => {
    console.log('guardado')
  }
  const handleAgregarMenu = () => {
    setaddMenu(true)
    setInfo(false)
  }
  const handleBack = ()=>{
   setaddMenu(false)
   setformularioProductos(false)
   setInfo(true)
}
const handleChangeBusiness = () => {
   dispatch(businessSelected("",false))
}
const handleAgregarProducto = () => {
    setformularioProductos(true)
    setInfo(false)
}
  useEffect(() => {

    getNegocios().then(inf => {
      setState(inf[0]);
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
 
  return (
    <Container maxWidth="md" justify="flex-start">
      {
        (addMenu) &&  <Grid container spacing={1}><AddMenu handleBack={handleBack}/></Grid>
      }
      {
        (info) &&
        <Grid container spacing={1}>
        <Grid item xs={12} lg={12}>
          <Typography variant="h3" >Empresa x </Typography>
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
        <Grid item xs={6} md={3}>
          <FormControl component="fieldset">
            <Button variant="contained" onClick={handleEditar}>Editar </Button>

          </FormControl>
        </Grid>
        <Grid item xs={6} md={3}>
          <FormControl component="fieldset">
            <Button variant="contained" color="secondary" onClick={handleGuardar}>Guardar </Button>

          </FormControl>
        </Grid>
       
        <Grid item xs={6} md={3}>
          <FormControl component="fieldset">
            <Button variant="contained" color="secondary" onClick={handleChangeBusiness}>Cambiar de empresa </Button>

          </FormControl>
        </Grid>

        <Grid item xs={12} md={6}>

        </Grid>

      </Grid>

      }
      
     

    </Container>
  )
}
