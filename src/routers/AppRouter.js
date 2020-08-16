import {
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";
import { useSelector} from 'react-redux'
import React from 'react';
import { Custom } from "../componentes/Custom";
import {PublicRouter} from './PublicRoute'
import {PrivateRouter }from './PrivateRoute'
import {PrivateAdminRouter} from './PrivateAdminRouter'
import {AuthRouter} from './AuthRouter'
import { Menu } from "../componentes/Menu";
import { DrapandDrop } from "../componentes/DrapandDrop";
import {AdminRouter} from './AdminRouter'



export default function AppRouter() {
 
  
  const {logged,admin} = useSelector( state => state.auth );
  console.log(logged,admin)
  
  return (
   
      
        <Router>
        <div>
      
            <Switch>
               
                <PrivateRouter isLoggedIn={logged}  exact path="/" component={ Custom} />
                <PrivateAdminRouter isAdmin={admin}  path="/admin" component={AdminRouter} />
                <PublicRouter isLoggedIn={logged}  path="/auth" component={ AuthRouter}/>
              
                <PrivateRouter isLoggedIn={logged}  path ="/custom/menu" component={Menu}/>
                <PrivateRouter isLoggedIn={logged}  path="/drap" component={DrapandDrop} />
                
                 
                <Redirect to ="/auth/login" />
             </Switch>

        </div>
         
    </Router>
     
  );
}