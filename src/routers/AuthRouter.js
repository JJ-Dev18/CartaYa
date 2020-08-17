import React from 'react'

import {
   
    Switch,
    Route,
    Redirect,
    
  } from "react-router-dom";
import { Login } from '../componentes/Login';
import { Register } from '../componentes/Register';
import {LoginAdmin} from '../componentes/Admin/LoginAdmin'


export const AuthRouter = () => {
    return (
        <div className="auth__main">
            <div className="auth__box-container">
            <Switch>
            <Route  path="/auth/login" component={ Login} />
            <Route  path="/auth/register" component={ Register} />
            {/* <Route path ="/auth/admin" component={LoginAdmin} /> */}

            <Redirect to ="/auth/login" />
            </Switch>
            </div>
        
        </div>
        
    )
}
