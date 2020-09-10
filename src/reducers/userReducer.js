import { types } from "../types/types";

const initialState = {
    openHome : true,
    openProfile: false,
    openBusiness : false,
    openCards : false,
}

export const userReducer = (state = initialState , action) => {

    switch (action.type) {
           case types.UserAdd :
               return{
                   ...action.payload,
                   User : action.payload,
                   addUser: true 
               }
               case types.UserView :
                   return{
                       ...action.payload,
                       info: action.payload,
                       showUser: true,
                   }
               case types.viewHome:
                  return {
                   ...action.payload                                  
               }
               case types.viewPerfil:
                  return {
                     ...action.payload,
                                                   
               }
               case types.viewNegocios:
                  return {
                  ...action.payload                                 
               }
               case types.viewMenus:
                  return {
                 ...action.payload                                 
               }
            case types.LogSetError:
                return {
                    ...action.payload,
                    error: true,
                    msgError: action.payload
                }
        default:
            return state ;
    }

}