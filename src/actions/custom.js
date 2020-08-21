import { types } from "../types/types";


//acciones para personalizar las cartas 
export const customs = (colorP,colorS,nameEmpresa,url) =>( {
   
    type: types.colores,
    payload: {
        colorP : colorP,
        colorS : colorS,
        datos : nameEmpresa,
        url: url
    }

})