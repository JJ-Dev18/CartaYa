import React from 'react'

import {
   
    Switch,
    Route,
    Redirect,
    
  } from "react-router-dom";

import { PrincipalAdmin } from '../componentes/Admin/LoginAdmin';
import { AdminUsers } from '../componentes/Admin/AdminUsers';



export const AdminRouter = () => {
    return (
        <div className="auth__main">
            <div className="auth__box-container">
            <Switch>
            
            <Route exact path="/" component={AdminUsers} />

            <Redirect to ="/auth/admin" />
            </Switch>
            </div>
        
        </div>
        
    )
}
