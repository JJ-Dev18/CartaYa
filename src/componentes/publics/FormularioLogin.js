import React  from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { login, loginAdmin, setErrorLogin } from '../../actions/auth'
import {Button} from '@material-ui/core/'
import '../../styles/login.css'
import Alert from '@material-ui/lab/Alert';
import {  getLogin } from '../../helpers/getLogin'


export const FormularioLogin = ({handleLogin,user,password,error,msgError,handleInputChange}) => {
  
   
   
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
                        required
                        />
                    <input type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        className="auth__input"
                        onChange={handleInputChange} 
                        required
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
