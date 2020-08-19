import { types } from "../types/types";


export const authReducer = (state = { logged: false, admin: false }, action) => {

    switch (action.type) {
        case types.login:

            return {
                ...action.payload,
                logged: true,
                admin: false
            }
        case types.loggout:
            return {
                ...action.payload,
                logged: false,
                admin: false
            }
        case types.loginAdmin:
            return {
                ...action.payload,
                admin: true,
                logged: false
            }
        case types.logoutAdmin:
            return {
                ...action.payload,
                logged: false ,
                admin: false,
            }
        case types.LogSetError:
            return {
                error: true,
                msgError: action.payload
            }

            case types.LogSetErrorAdmin:
            return {
                errorAdmin: true,
                msgErrorAdmin: action.payload
            }
        case types.LogRemoveError:
            return {
                error: null,
                msgError: null
            }
        default:
            return state;
    }
}