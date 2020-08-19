import React  from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import { login, setError } from '../actions/auth'
import {Button} from '@material-ui/core/'
import '../styles/login.css'

import Alert from '@material-ui/lab/Alert';
import { getUser } from '../helpers/getUser'

export const Login = () => {

    const dispatch = useDispatch();
    const {error,msgError} = useSelector( state => state.auth );
    const [formValue,handleInputChange] = useForm({

        user:'admin',
        password:'123456'
    })
    
    const{user,password} = formValue;
  
   

    const handleLogin = (e) => {
        e.preventDefault();
        getUser(user,password).then(tok => {
            if(tok){
                dispatch(login(user,password))
            }else{
                dispatch(setError('Usuario o contraseña incorrecta'))
            }
           
        }).catch(e => console.log(e.message))
       

        
        
    }

   
    return (
        <div className="content__form-login">
            
                <form className="form__login" onSubmit={handleLogin}>
                <h1 className="name__carta"> Carta YA ! </h1>
                    
                    <input type="text"
                        placeholder="Email"
                        name="user"
                        value={user}
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
                    { (error) && <Alert severity="error">{msgError}</Alert>} 
                   <Link className="text__registro" to="/admin"> Admin </Link>
                    
                     <Link className="text__registro" to="/auth/register">
                         Registrarse</Link>
                </form>
               
           
        </div>
    )
}
