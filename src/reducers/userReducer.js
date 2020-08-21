import { types } from "../types/types";



export const userReducer = (state = {} , action) => {

    switch (action.type) {
           case types.UserAdd :
               return{
                   User : action.payload,
                   addUser: true 
               }
               case types.UserView :
                   return{
                       info: action.payload,
                       showUser: true,
                   }
            case types.LogSetError:
                return {
                    error: true,
                    msgError: action.payload
                }
        default:
            return state ;
    }

}