import React from 'react'
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom'

export const AdminRouter = ({
    isAdmin,
    component : Component ,
    ...rest
}) => {

    
    localStorage.setItem('lastPath', rest.location.pathname)
 
    return (
        <Route { ...rest }
        component={ (props) => (
            (!!isAdmin)
            ? (<Component {...props} />)
            : (<Redirect to ="/login" />)
        )}
        />
    )
        
}  


AdminRouter.propTypes = {

    isAdmin : PropTypes.bool.isRequired,
    component : PropTypes.func.isRequired

}
