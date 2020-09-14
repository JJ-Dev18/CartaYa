import {useState, useEffect,useRef} from 'react'
import { getNegocios } from '../peticiones/Negocios/getNegocios';


export const useFetchBusiness = () => {
   
    const isMounted = useRef(true) //referencia a el montaje de el componente que usara el use fetch
    const [state, setState] = useState({
        data : null,
        loading: true,
        error:null
    });
    
    //useEffect para cuando se desmonte el componente 
    useEffect(() => {
        
        return () => {
            isMounted.current = false ;
        }
        
    }, [])

    useEffect(() => {

        setState( {data : null, loading :true , error : null})
        getNegocios().then(info => {
            
          
                //si el componente se desmonto no realiza la peticion 
            if( isMounted.current){
                setState({
                    loading: false,
                    error: null,
                    data : info
                })
            }
           
        });

    },[])

    

    return state;
}
