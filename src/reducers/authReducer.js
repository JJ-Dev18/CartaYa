import { types } from "../types/types";


export const authReducer = (state = {}, action) => {

    switch (action.type) {
        case types.login:

            return {
                ...action.payload,
                logged: true
            }

        case types.loggout:
            return {
                ...action.payload,
                logged :false
            }

        case types.loginAdmin: 
        return{
            ...action.payload,
                admin : true,
                
                 
        }    
        default:
            return state;
    }
}