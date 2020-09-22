import {useState, useEffect,useRef} from 'react'
import { getMenus } from '../peticiones/Menus/getMenus';

export const useFetchMenus = (id) => {
   
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
        getMenus(id).then(info => {
       
          
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
