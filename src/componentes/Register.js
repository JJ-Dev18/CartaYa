import React from 'react'
import '../styles/login.css'
import { Link } from 'react-router-dom'
import {Button} from '@material-ui/core'

export const Register = () => {
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
                className="auth__input"
                autoComplete="off"
                id="id__email"
                // onChange={handleInputChange}
                />
                
               
                <input type="text"
                placeholder="Email"
                name="email"
                className="auth__input"
                // onChange={handleInputChange}
                // 
                />
                
                <input type="password"
                placeholder="Password"
                name="password"
                className="auth__input"
                // onChange={handleInputChange}
                // value={password}
                />
                <input type="password"
                placeholder="Confirm Password "
                name="password2"
                className="auth__input"
                // onChange={handleInputChange}
                // value={password2}
                />


                <Button variant="contained" color="secondary" type="onSubmit" className="btn">Registrarme</Button>
                 
                 <Link to="/auth/login" className=" text__registro" >
                     ¿ Ya esta registrado ?
            </Link>
            </form>
            
        </div>
    )
}
