import { types } from "../types/types";


export const productoAgregado = (idCategoria) => ({

       type: types.AddProducto ,
       payload : idCategoria
}
)

export const businessSelected = (id,selected) =>( {

     type : types.SelectBusiness,
     payload :{
            id : id ,
            selected : selected
     }
}
)

export const selectCategory = (id) => ({
       type: types.SelectCategory,
       payload : id 
})
    