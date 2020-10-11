import React, { useEffect, useState } from 'react'
import { useFetchBusiness } from '../../hooks/useFetchBusiness';
import { Negocios } from './Negocios';
import { viewHome } from '../../actions/users';
import { useDispatch } from 'react-redux';
import { AddNegocio } from './Formularios/AddNegocio';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Typography } from '@material-ui/core';

export const Home = () => {
 
   
  
    const dispatch = useDispatch();
    const { data , loading } = useFetchBusiness()
    const [negocios, setnegocios] = useState(false)
   
    useEffect(() => {
      if(!loading) {
       if(data.length !== 0){
          setnegocios(true)
        }
      }
     
   }, [loading])
    
  
    const handleBack = () => {
      setnegocios(true)
    }
    const handleAgregar = () => {
      setnegocios(false)
      
    }
   
    return (
        <>
         {/* {
           (loading) &&  <CircularProgress/>
         } */}
            {
             (loading) ?  <CircularProgress /> : (!negocios) ? <AddNegocio handleBack={handleBack}/>  : 
            <Negocios handleAgregar={handleAgregar}/> 
            
              
            }
           
      
        </>
       
    )
}
