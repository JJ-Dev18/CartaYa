import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Redirect
    
  } from "react-router-dom";
 
  import {useSelector} from 'react-redux'
import { AuthRouter } from './AuthRouter';

import { PrivateRouter } from './PrivateRoute';
import { PublicRouter } from './PublicRoute';

import { AdminUsers } from '../componentes/Admin/AdminUsers';
// import { Custom } from '../componentes/User/Custom';
import { AdminRouter } from './AdminRouter';
import { UserPrincipal } from '../componentes/User/Drawer';
import {PrincipalUser}  from '../Pages/user/PrincipalUser'
  

export  const AppRouter = () => {
    
    
    
    const {logged,rol} = useSelector( state => state.auth );
    console.log(!!rol)

   

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
                <PrivateRouter isLoggedIn={logged} exact path="/" component={ PrincipalUser} />
                
                
                
                <Redirect to ="/auth/login" />
             </Switch>

        </div>
         
    </Router>
    )
}

export default AppRouter;
