import { types } from "../types/types";



export const login = (user,password ) => ({

    type: types.login,
    payload : {
        user:user,
        password: password
    }

})
export const loggout = () =>( {

    type : types.loggout

})

export const loginAdmin = (user,password) =>( {

    type: types.loginAdmin,
    payload : {
        adminN: user,
        password : password 
    }
})

export const logoutAdmint = () =>( {
    type: types.logoutAdmint,
    
})

export const setError = (msgError) => ({

    type: types.LogSetError,
    payload : msgError
    
   
    
})

export const setErrorAdmin = (msgError) => ({

    type: types.LogSetErrorAdmin,
    payload : msgError
    
   
    
})
