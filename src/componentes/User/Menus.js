import React, { useEffect, useState } from 'react'
import { Button, FormControl, Grid, Typography } from '@material-ui/core';
import { useFetchMenus } from '../../hooks/useFetchMenus';
import { useDispatch, useSelector } from 'react-redux';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { viewBusiness, viewCards, viewHome } from '../../actions/users';
import { AddMenu } from './Formularios/AddMenu';
import { Menu } from './Menu';

export const Menus = () => {

  const theme = useTheme();
  const { id, selected } = useSelector(state => state.business);
  const { data, loading } = useFetchMenus(id);
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  
  const [addMenu, setaddMenu] = useState(false)
  
  const dispatch = useDispatch();


 
  const handleBack = ()=>{
    setaddMenu(false)  
    // dispatch(viewHome())
   
    
 }
  const handleAgregarMenu = () => {
    setaddMenu(true)
  }
  
  useEffect(() => {
    if (!loading) {
      if (data.length === 0) {
         setaddMenu(true)
      }
    }

  }, [loading])
  
  console.log(id, data)
  return (
    <Grid container >
     <Typography variant='h3'>Menús</Typography>
      {  (addMenu) ? <AddMenu handleBack={handleBack} /> : 
           <>
           {/* <Grid style={{display:'flex', flexDirection: 'row'}} md={12}> */}
           <Menu id={id} />
           
           
            <Grid item xs={6} md={3}>
              <FormControl component="fieldset">
                <Button variant="contained" color="secondary" onClick={handleAgregarMenu}>Agregar Menu </Button>

              </FormControl>
            </Grid>
           </>
            
           
          
         }
         {
           (addMenu) && <Menu data={data} loading={loading} />
         }
 

    </Grid>

  )
}
