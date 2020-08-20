import React , {useEffect, useState}from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Redirect
    
  } from "react-router-dom";
 
  import {useDispatch,useSelector} from 'react-redux'
import { AuthRouter } from './AuthRouter';

import { PrivateRouter } from './PrivateRoute';
import { PublicRouter } from './PublicRoute';

import { AdminUsers } from '../componentes/Admin/AdminUsers';
import { Custom } from '../componentes/Custom';
import { AdminRouter } from './AdminRouter';
  

export  const AppRouter = () => {
    
    const dispatch = useDispatch();
    
    const {logged,rol} = useSelector( state => state.auth );
    console.log(!!rol)

     const [checking, setChecking] = useState(true)
     const [isLoggedIn, setIsLoggedIn] = useState(false)

    // useEffect(() => {
    //     firebase.auth().onAuthStateChanged( (user) => {

    //         if(user?.uid){
    //             dispatch(login(user.uid,user.displayName))
    //             setIsLoggedIn(true)
    //             loadNotes(user.uid)
    //         }
    //         else{
    //             setIsLoggedIn(false)
    //         }

    //         setChecking(false)
            
    //     })
    // }, [dispatch,setChecking,setIsLoggedIn])      

    // if (checking){
    //    return <h1> Wait...</h1>
    // }

    return (
    <Router>
        <div>

            <Switch>
                <AdminRouter isAdmin={!!rol}  path="/admin" component={ AdminUsers} />
                <PublicRouter isLoggedIn={logged} path="/auth" component={ AuthRouter}/>
                <PrivateRouter isLoggedIn={logged} exact path="/" component={ Custom} />
                
                
                
                <Redirect to ="/auth/login" />
             </Switch>

        </div>
         
    </Router>
    )
}

export default AppRouter;
