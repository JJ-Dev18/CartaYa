import React from 'react'
import {
   
    Switch,
    Route,
    Redirect,
    
  } from "react-router-dom";
import { Login } from '../Pages/Publico/Login';
import { Register } from '../Pages/Publico/Register';



export const AuthRouter = () => {
    return (
       
            <Switch>
            <Route exact path="/auth/login" component={ Login} />
            <Route exact path="/auth/register" component={Register } />

            <Redirect to ="/auth/login" />
            </Switch>
            
    )
}
