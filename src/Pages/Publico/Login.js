import React, { useEffect }   from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { keepSesion, login, loginAdmin, setErrorLogin } from '../../actions/auth'
import {Button} from '@material-ui/core/'
import '../../styles/login.css'
import Alert from '@material-ui/lab/Alert';
import {  getLogin } from '../../helpers/getLogin'
import { FormularioLogin } from '../../componentes/publics/FormularioLogin'
import Cookies from 'universal-cookie'

export const Login = ({history}) => {
    const cookies = new Cookies()
    const tok = cookies.get('token');
 
    const token = localStorage.getItem('token')
    const dispatch = useDispatch();
    const {error,msgError} = useSelector( state => state.auth );
    const [formValue,handleInputChange] = useForm({

        user:'sss',
        password:'1234'
    })
    
    const{user,password} = formValue;
    const readCookie = () => {
        const token = cookies.get('token');
        if(token !== undefined){
            dispatch(keepSesion())
            console.log('sesion mantenida')
        }
    }
   
    useEffect(() => {
    
        readCookie()
     }, [])

    const handleLogin = (e) => {
        e.preventDefault();
        
        getLogin(user,password).then(resp => {
            //si hay toquen es por que esta registrado 
            if(resp.token ){
 
                let level = resp.level+'';
                localStorage.setItem('token', resp.token)
               
                //si el valor del level es 0 es admin si es 1 es user      
               if(resp.level === 0){
                dispatch(loginAdmin(user,password,level))
                history.push("/admin") 
               }  
               else{
               
                dispatch(login(user,password))
                cookies.set('token',token, {path: '/'})
               

             
                
               }
                       
            } 
            else{
                
                dispatch(setErrorLogin('Usuario o contraseña incorrecta'))
            }  
                       
        } 
        ).catch(e => console.log(e.message))    
        
    }

    
    return (
         
        <FormularioLogin 
        handleInputChange={handleInputChange}
        handleLogin={handleLogin}
        error={error}
        msgError={msgError}
        user={user}
        password={password}
        />
    )
}
