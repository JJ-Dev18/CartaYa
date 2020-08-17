import {useState, useEffect} from 'react'
import { getUser } from '../helpers/getUser'

export const useFetchUser = ( user, password) => {

    const [state, setState] = useState({
        token : '',
        logged : false 
    })

   
        getUser(user,password).then(tok => {

            setState({
                token: tok,
                logged: true 
            })
        })
    


    return state
}