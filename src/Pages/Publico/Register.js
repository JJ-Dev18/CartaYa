import React, { useState } from 'react'
import '../../styles/login.css'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
import { useForm } from '../../hooks/useForm'
import { registerUser } from '../../peticiones/registerUser'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { confirmEmail } from '../../peticiones/confirmEmail'
import { useDispatch } from 'react-redux'
import { addUsers, setErrorUser } from '../../actions/users'
import { FormularioRegistro } from '../../componentes/publics/FormularioRegistro'


export const Register = () => {

    const dispatch = useDispatch();
    const initialForm = {
        name: '',
        email: '',
        password: '',
        password2: ''
    };
 

    const [formValues, handleInputChange] = useForm(initialForm)
    const [register, setRegister] = useState(false)
    const { name, email, password, password2 } = formValues;

    // registerUser(name, email, password)
    const handleRegister = (e) => {
        e.preventDefault()
        
        if (password === password2) {

            confirmEmail(email).then(resp => {
                console.log(resp)
                if (!resp) {
                    
                    registerUser(email, password, name).then(msg => {
                        console.log(msg)
                        if (!msg.response) {
                            dispatch(setErrorUser('Error al registrar con el servidor'))
                        }
                        else{
                            setRegister(true)
                            dispatch(addUsers(name, email, password))
                        }

                    })
            
                }
            
        })

    }
}
//ALERTA DE REGISTRO 

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
        return;
    }

    setRegister(false);
};

//Componente de registro 
return (

    <FormularioRegistro 
    handleInputChange={handleInputChange}
    name={name}
    email={email}
    password={password}
    password2={password2}
    handleRegister={handleRegister}
    handleClose={handleClose}
    Alert={Alert}
    register={register}
    />
)
}
