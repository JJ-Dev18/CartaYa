import React from 'react'

import {
   
    Switch,
    Route,
    Redirect,
    
  } from "react-router-dom";

import { PrincipalAdmin } from '../componentes/Admin/PrincipalAdmin';
import { AdminUsers } from '../componentes/Admin/AdminUsers';



export const AdminRouter = () => {
    return (
        <div className="auth__main">
            <div className="auth__box-container">
            <Switch>
            <Route exact path="/admin/principal" component={PrincipalAdmin} />
            <Route exact path="/admin/users" component={AdminUsers} />

            <Redirect to ="/admin/principal" />
            </Switch>
            </div>
        
        </div>
        
    )
}
