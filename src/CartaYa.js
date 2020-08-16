import React  from 'react'
import './cartaYa.css'

import AppRouter from './routers/AppRouter'
import { Provider } from 'react-redux'
import { store } from './store/store'

export const CartaYa = () => {
    
    return (
        
        <Provider store = {store} >
          <AppRouter/>
        </Provider>
      
    )
}
