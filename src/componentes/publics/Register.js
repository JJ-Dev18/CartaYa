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
        console.log(name,email)
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

    <div className="content__form-login">

        <form className="form__login">
            {/* {
                    (msgError !== null) &&
                    <div className="auth__alert-error">
                      {msgError}
                    </div>
                } */}
            <h3 className="name__carta">Registro </h3>

            <input type="text"
                placeholder="Name"
                name="name"
                value={name}
                className="auth__input"
                autoComplete="off"
                id="id__email"
                required
                onChange={handleInputChange}
            />


            <input type="text"
                placeholder="Email"
                name="email"
                className="auth__input"
                required
                onChange={handleInputChange}
                value={email}
            // 
            />

            <input type="password"
                placeholder="Password"
                name="password"
                className="auth__input"
                required
                onChange={handleInputChange}
                value={password}
            />
            <input type="password"
                placeholder="Confirm Password "
                name="password2"
                className="auth__input"
                required
                onChange={handleInputChange}
                value={password2}
            />


            <Button variant="contained" color="secondary" type="onSubmit" onClick={handleRegister} className="btn">Registrarme</Button>

            <Link to="/auth/login" className=" text__registro" >
                ¿ Ya esta registrado ?
            </Link>
        </form>
        <Snackbar open={register} autoHideDuration={6000} onClose={handleClose}>
            <Alert severity="success" onClose={handleClose}>
                Registrado Correctamente !
                 </Alert>
        </Snackbar>

    </div>
)
}
