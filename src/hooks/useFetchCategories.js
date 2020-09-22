import {useState, useEffect,useRef} from 'react'
import { getCategorias } from '../peticiones/productos/getCategorias';

export const useFetchCategories = (id) => {
   
    const isMounted = useRef(true) //referencia a el montaje de el componente que usara el use fetch
    const [state, setState] = useState({
        data : [],
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

        setState( {data : [], loading :true , error : null})
        getCategorias(id).then(info => {
       
          
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
