import { types } from "../types/types";

//Acciones de la autenticacion tanto admin como de user 

export const login = (user,password ) => ({

    type: types.login,
    payload : {
        user:user,
        password: password,
        
    }

})
export const loggout = () =>( {

    type : types.loggout

})

export const loginAdmin = (user,password,rol) =>( {

    type: types.loginAdmin,
    payload : {
        adminN: user,
        password : password ,
        rol: rol,
    }
})

export const logoutAdmin= () =>( {
    type: types.logoutAdmin
    
})

export const setErrorLogin = (msgError) => ({

    type: types.LogSetError,
    payload : msgError
    
   
    
})

export const setErrorAdmin = (msgError) => ({

    type: types.LogSetErrorAdmin,
    payload : msgError
    
   
    
})

