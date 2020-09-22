import { types } from "../types/types";

const initialState = {
    
    id: '',
    idCategory : '',
    selected: false
}

export const businessReducer = (state = initialState , action) => {

    switch (action.type) {
        case types.SelectBusiness: 
        return {
            id : action.payload.id,
            selected : action.payload.selected
        }
           case types.AddMenu :
               return{
                 id : action.payload
               }
              
            case types.AddProducto:
                return {
                    id : action.payload
                }

                case types.AddCategoria : 
                return {
                    ...state,
                    idCategoria : action.payload
                }
                case types.SelectCategory:
                    return{
                        ...state,
                        idCategory : action.payload
                    }
        default:
            return state ;
    }

}