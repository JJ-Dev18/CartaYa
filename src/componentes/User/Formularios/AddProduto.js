import React, { useEffect, useState } from 'react'
import { Grid, FormControl, Input, FormHelperText, InputLabel, Typography, FormLabel, FormGroup, Container, Button, Select, Paper } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from '../../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux';
import { selectCategory } from '../../../actions/business';
import { addProducto } from '../../../peticiones/productos/addProducto';
import { addCategoria } from '../../../peticiones/productos/addCategoria';
import { getCategorias } from '../../../peticiones/productos/getCategorias';
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

export const AddProduto = ({handleBack}) => {
    const classes = useStyles();
    const {id,selected,idCategory} = useSelector( state => state.business );
    const [categoria, setcategoria] = useState([])
    const [agregado, setagregado] = useState(false)
    const [agregadoCategoria, setAgregadoCategoria] = useState(false)
    const dispatch = useDispatch();
    const [formValues, handleInputChange, reset] = useForm({
        nombre: "",
        descripcion: "",
        precioNeto: "",
        precio: "",
        tipo: "",
        nombreCategoria: "" ,
        descripcionCategoria : "" ,
       

    })

    const { nombre, descripcion, precioNeto, precio, tipo,nombreCategoria,descripcionCategoria,} = formValues;
    useEffect(() => {      
        getCategorias(id).then(inf => {
            setcategoria(inf)
        })   
    }, [])
    
    const handleCategoriaChange = (event) => {
        const id = event.target.value;
        dispatch(selectCategory(id))     
    }
    const handleAgregarProducto = () => {
        
        addProducto(id,nombre,descripcion,precioNeto,precio,tipo,idCategory).then(inf => {
           
           setagregado(true)
           console.log(inf)
        })
        
   }
   const handleAgregarCategoria = () => {
    
    addCategoria(id,nombreCategoria,descripcionCategoria).then(inf => {
        setAgregadoCategoria(true)       
 
    })
    getCategorias(id).then(inf => {
       setcategoria(inf)     
   })
}
    return (
        <Container maxWidth="md">
        <Grid container spacing={1}>
        <Grid item xs={12} lg={12}>
            <Typography variant="h4" > Agregar Productos </Typography>
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
                <InputLabel>Precio neto</InputLabel>
                <Input value={precioNeto} name="precioNeto" onChange={handleInputChange}></Input>

                <FormHelperText></FormHelperText>
            </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
            <FormControl component="fieldset" className={classes.formControl}>
                <InputLabel>Precio </InputLabel>
                <Input value={precio} name="precio" onChange={handleInputChange}></Input>

                <FormHelperText></FormHelperText>
            </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-native-simple">Categorias</InputLabel>
                <Select
                    native
                    value={categoria.id}
                    onChange={handleCategoriaChange}
                    label="Categorias"
                    inputProps={{
                        name: 'title',
                        id: id,
                    }}
                >
                    <option aria-label="None" value="" />

                     {
                        (categoria.length !== 0) && categoria.map(inf => (
                        <option value={inf.id} key={inf.title}  id={inf.id}>  {inf.title}  </option> 
                       ))
                    }   
                   
                </Select>
            </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-native-simple">Tipos</InputLabel>
                <Select
                    native
                    value={tipo}
                    onChange={handleInputChange}
                    label="Tipo"
                    inputProps={{
                        name: 'tipo',
                        id: 'age-native-simple',
                    }}
                >
                    <option aria-label="None" value="" />
                    <option value={0}>Unico</option>
                    <option value={1}>Compuesto</option>

                </Select>
            </FormControl>
        </Grid>
        <Grid item xs={12} md={12}>
            <FormControl component="fieldset" >

                <TextareaAutosize style={{ width: '300px' }} aria-label="maximum height" rowsMin={3} placeholder="Descripción" onChange={handleInputChange} name="descripcion" value={descripcion} />

                <FormHelperText></FormHelperText>
            </FormControl>

        </Grid>


        <Grid item xs={12} md={6}>
            <Button variant="contained" color="primary" onClick={handleAgregarProducto}> Agregar Producto</Button>
        </Grid>
        <Grid item xs={12} md={6}>
            <Button variant="contained" color="primary" onClick={handleBack}>Atras</Button>
        </Grid>

    </Grid>
    {
        (agregado) && <Alert severity="success">Se ha agregado el Producto,seleccione atras para visualizarlo.</Alert>
    }

    <Grid container spacing={1} className={classes.formCategoria}>
        <Grid item xs={12} lg={12}>
            <Typography variant="h4" > Agregar Categoria </Typography>
        </Grid>
        <Grid item xs={12} md={12}>

            <FormControl component="fieldset" className={classes.formControl}>
                <InputLabel>Nombre</InputLabel>
                <Input value={nombreCategoria} name="nombreCategoria" onChange={handleInputChange}></Input>

                <FormHelperText></FormHelperText>
            </FormControl>
        </Grid>

        <Grid item xs={12} md={12}>
            <FormControl component="fieldset" >

                <TextareaAutosize style={{ width: '300px' }} aria-label="maximum height" rowsMin={3} placeholder="Descripción" onChange={handleInputChange} name="descripcionCategoria" value={descripcionCategoria} />

                <FormHelperText></FormHelperText>
            </FormControl>

        </Grid>
        <Grid item xs={12} md={6}>
            <Button variant="contained" color="primary" onClick={handleAgregarCategoria}> Agregar Categoria </Button>
        </Grid>
        <Grid item xs={12} md={6}>
            <Button variant="contained" color="primary" onClick={handleBack}> Atras </Button>
        </Grid>
        {
        (agregadoCategoria) && <Alert severity="success">Se ha agregado La categoria.</Alert>
        }
    </Grid>
    </Container>
    )
}
