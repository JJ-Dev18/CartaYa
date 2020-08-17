import {
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";
import { useSelector} from 'react-redux'
import React ,{useEffect} from 'react';
import { Custom } from "../componentes/Custom";
import {PublicRouter} from './PublicRoute'
import {PrivateRouter }from './PrivateRoute'
import {PrivateAdminRouter} from './admin/PrivateAdminRouter'
import {AuthRouter} from './AuthRouter'
import { Menu } from "../componentes/Menu";
import { DrapandDrop } from "../componentes/DrapandDrop";
import {AdminRouter} from './AdminRouter'
import { PublicRouterAdmin } from "./admin/PublicRouterAdmin";
import { LoginAdmin } from "../componentes/Admin/LoginAdmin";




export default function AppRouter() {
 
  
  const {logged,admin} = useSelector( state => state.auth );
  console.log(logged,admin)

  
  
  return (
   
      
        <Router>
        <div>
      
            <Switch>
               
               
                {/* <PrivateAdminRouter isAdmin={admin}  path="/admin" component={AdminRouter} /> */}
                <PublicRouter isLoggedIn={logged}  path="/auth" component={ AuthRouter}/>
                
                <PrivateAdminRouter isAdmin={admin} exact path="/" component={AdminRouter} />
                <PublicRouterAdmin isAdmin={admin} path= "/admin" component={LoginAdmin} />
                
                <PrivateRouter isLoggedIn={logged}  path ="/custom/menu" component={Menu}/>
                {/* <PrivateRouter isLoggedIn={logged}  path="/drap" component={DrapandDrop} /> */}
                <PrivateRouter isLoggedIn={logged}  exact path="/custom" component={Custom} />
                
                 
                <Redirect to ="/auth/login" />
             </Switch>

        </div>
         
    </Router>
     
  );
}