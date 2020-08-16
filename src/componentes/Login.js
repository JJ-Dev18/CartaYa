import React  from 'react'
import {useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import { login, loginAdmin } from '../actions/auth'
import {Button} from '@material-ui/core/'
import '../styles/login.css'

export const Login = () => {

    const dispatch = useDispatch();
    
    const [formValue,handleInputChange] = useForm({

        email:'admin',
        password:'1234'
    })
    

    const handleLogin = (e) => {
        e.preventDefault();
        if(email==='admin' && password === '1234'){
            dispatch(loginAdmin(email,password))
        }
        else{
            dispatch(login(email,password))
        }

        
        
    }

    const{email,password} = formValue;
   
    return (
        <div className="content__form-login">
            
                <form className="form__login" onSubmit={handleLogin}>
                <h1 className="name__carta"> Carta YA ! </h1>
                    
                    <input type="text"
                        placeholder="Email"
                        name="email"
                        value={email}
                        className="auth__input"
                        onChange={handleInputChange} 
                        id="id__email"
                        />
                    <input type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        className="auth__input"
                        onChange={handleInputChange} 
                        />
                    <Button className="btn" type="submit" variant="contained" color="secondary" size="large" > Login</Button>
                    
                     <Link className="text__registro" to="/auth/register">
                         Registrarse</Link>
                </form>
               
           
        </div>
    )
}
