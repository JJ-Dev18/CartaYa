import { types } from "../types/types";

//Acciones de los usuarios ( Admin )

export const addUsers = (name,email) => ({

    
    type: types.UserAdd,
    payload: {
        nombre : name,
        correo : email
    }

})

export const viewUser = (info) => ({

    type : types.UserView,
    payload: info
}
)
export const setErrorUser = (msgError) => ({

    type: types.ErrorUser,
    payload : msgError
    
   
    
})





