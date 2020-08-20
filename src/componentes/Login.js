import React  from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import { login, setError, loginAdmin } from '../actions/auth'
import {Button} from '@material-ui/core/'
import '../styles/login.css'

import Alert from '@material-ui/lab/Alert';
import { getUser } from '../helpers/getUser'

export const Login = ({history}) => {

    const dispatch = useDispatch();
    const {error,msgError} = useSelector( state => state.auth );
    const [formValue,handleInputChange] = useForm({

        user:'admin',
        password:'123456'
    })
    
    const{user,password} = formValue;
  
   

    const handleLogin = (e) => {
        e.preventDefault();
        getUser(user,password).then(resp => {
            //si hay toquen es por que esta registrado 
            if(resp.token ){
 
                let level = resp.level+'';
                localStorage.setItem('token', resp.token)
               if(resp.level === 0){
                dispatch(loginAdmin(user,password,level))
                history.push("/admin") 
               }  
               else{
                history.push("/custom")
                dispatch(login(user,password))
                 
               }
                //si el valor del level es 0 es admin si es 1 es user 
            // (resp.level === 1) ? history.push("/custom")   : history.push("/admin")
            // (resp.level === 1) ? dispatch(login(user,password))  : dispatch(loginAdmin(user,password,level))

            //  dispatch(login(user,password,level)                    
            } 
            else{
                
                dispatch(setError('Usuario o contraseña incorrecta'))
            }  
                       
        } 
        ).catch(e => console.log(e.message))    
        
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
