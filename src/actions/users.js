import { types } from "../types/types";

//Acciones de los usuarios ( Admin )





export const viewUser = (info) => ({

    type : types.UserView,
    payload: info
}
)


export const addUsers = (name,email) => ({

    
    type: types.UserAdd,
    payload: {
        nombre : name,
        correo : email
    }

})
export const viewHome = () =>( {

    type: types.viewHome,
    payload : {
        openHome: true,
        openProfile: false,
        openBusiness: false,
        openCards : false,


    }
})
export const viewProfile = () =>( {

    type: types.viewPerfil,
    payload : {
        openHome: false,
        openProfile: true,
        openBusiness: false,
        openCards : false,

    }
})
export const viewBusiness = () =>( {

    type: types.viewNegocios,
    payload : {
        openHome: false,
        openProfile: false,
        openBusiness: true,
        openCards : false,

    }
})
export const viewCards = () =>( {

    type: types.viewMenus,
    payload : {
        openHome: false,
        openProfile: false,
        openBusiness: false,
        openCards : true,

    }
})

export const setErrorUser = (msgError) => ({

    type: types.ErrorUser,
    payload : msgError
    
   
    
})





