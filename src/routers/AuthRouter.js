import React from 'react'
import {
   
    Switch,
    Route,
    Redirect,
    
  } from "react-router-dom";

import { Login } from '../componentes/publics/Login';
import { Register } from '../componentes/publics/Register';

export const AuthRouter = () => {
    return (
       
            <Switch>
            <Route exact path="/auth/login" component={Login} />
            <Route exact path="/auth/register" component={ Register} />

            <Redirect to ="/auth/login" />
            </Switch>
            
    )
}
