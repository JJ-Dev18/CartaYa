import { AccessibilityTwoTone } from "@material-ui/icons";
import { types } from "../types/types";


export const authReducer = (state = { rol:null,logged:true }, action) => {

    switch (action.type) {
        case types.login:

            return {
                ...action.payload,
                logged:true
                
            }
            case types.KeepLogin :
                return {
                ...action.payload,
                logged: true,
            }
        case types.loggout:
            return {
                ...action.payload,
                rol: null,
                logged: false,
                
            }
        case types.loginAdmin:
            return {
                ...action.payload,
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