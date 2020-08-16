import { types } from "../types/types";


export const customs = (colorP,colorS,nameEmpresa,url) =>( {
   
    type: types.colores,
    payload: {
        colorP : colorP,
        colorS : colorS,
        datos : nameEmpresa,
        url: url
    }

})