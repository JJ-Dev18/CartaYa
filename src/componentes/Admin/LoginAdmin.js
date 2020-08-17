import React from 'react'
import {TextField,Button} from '@material-ui/core'
import '../../styles/adminPrincipal.css'
import { useForm } from '../../hooks/useForm'
import { loginAdmin, setErrorAdmin } from '../../actions/auth'
import {useDispatch,useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import Alert from '@material-ui/lab/Alert';
import { getUser } from '../../helpers/getUser'



export const LoginAdmin = (({history}) => {
    
    const dispatch = useDispatch();
    const {errorAdmin,msgErrorAdmin} = useSelector( state => state.auth );
    const [formValues,handleInputChange] = useForm({
        user: 'admin',
        password: '123456'
    })
    
    const {user,password} = formValues   

    const handleLogin = (e) => {
        e.preventDefault()
        getUser(user,password).then(tok => {
            if(tok){
                dispatch(loginAdmin(user,password))
            }
            else{
                
                dispatch(setErrorAdmin('Usuario o contraseña incorrecta'))
            }
        })
        
    }
    
    return (
        <div className="contain__admin_login">
            <div className="contain__form-login">
                <form className="form__login-admin" noValidate autoComplete="off" onSubmit={handleLogin}>
                    <h1 className="text__login">LOGIN</h1>
                     { (errorAdmin) && <Alert severity="error">{msgErrorAdmin}</Alert>} 
                    <TextField id="standard-basic" label="Usuario" value={user} name="user" onChange={handleInputChange}/>
                    <TextField id="filled-basic" label="Contraseña" value={password} name="password" onChange={handleInputChange}/>
                    <Button variant="contained" color="secondary" type="onSubmit" className="btn__login" >Login</Button>
                
                    <Link className="text__registro" to="/auth"> User </Link>   
                              
                </form>
            </div>
        </div>
    )
}
)