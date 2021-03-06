import React  from 'react'
import './cartaYa.css'

import AppRouter from './routers/AppRouter'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { Productos } from './componentes/User/Productos'
import Maps from './componentes/User/Maps'

export const CartaYa = () => {
    
    return (
        
        <Provider store = {store} >
          <AppRouter/>
        </Provider>
      
    )
}
