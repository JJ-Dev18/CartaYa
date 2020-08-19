import {useState, useEffect} from 'react'
import { getUser } from '../helpers/getGifs';

export const useFetchGifs = (user,password) => {
   
    const [state, setState] = useState({
        data : [],
        loading: true
    });
    useEffect(() => {

        getUser(user,password).then(token => {
       
          
               
                setState({
                    data : token,
                    loading: false
                })
           
        });

    },[category])

    

    return state;
}
