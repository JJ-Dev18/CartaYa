import { types } from "../types/types";



export const customReducer = (state = {},action) => {

    switch (action.type) {
        case types.colores:
            return{
                ...action.payload
            }
    
        default :
        return state ;
    }
}