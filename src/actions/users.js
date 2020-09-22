import { types } from "../types/types";

//Acciones de los usuarios ( Admin )


//Add menu
export const addMenu = (id) => ({
    type: types.AddMenu,
    payload:  id
        
   
    
})


export const viewUser = (info) => ({

    type : types.UserView,
    payload: info
}
)

//Add usuario 
export const addUsers = (name,email) => ({

    
    type: types.UserAdd,
    payload: {
        nombre : name,
        correo : email
    }

})



// Actiones para cambiar de vista 
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
        openProductos : false ,

    }
})
export const viewBusiness = () =>( {

    type: types.viewNegocios,
    payload : {
        openHome: false,
        openProfile: false,
        openBusiness: true,
        openCards : false,
        openProductos : false ,

    }
})
export const viewCards = (id) =>( {

    type: types.viewMenus,
    payload : {
        openHome: false,
        openProfile: false,
        openBusiness: false,
        openCards : true,
        openProductos : false ,
        id: id,

    }
})
export const viewProductos = () => ({
    type: types.viewProductos,
    payload : {
        openHome: false,
        openProfile: false,
        openBusiness: false,
        openCards : false,
        openProductos : true ,
    
    }
})
//Acciones para dar error 
export const setErrorUser = (msgError) => ({

    type: types.ErrorUser,
    payload : msgError
    
   
    
})





