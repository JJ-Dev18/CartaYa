import React, { useState, useRef } from 'react'
import '../../styles/custom.css'
import {useDispatch} from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { customs } from '../../actions/custom';
import { loggout } from '../../actions/auth';
import { Input } from '@material-ui/core'
import {Button}from '@material-ui/core/';

//Componente para personalizar las cartas 
export const Custom = ({history}) => {
    // const [color, setColor] = useState('#000')
    const dispatch = useDispatch();
    const inp1 = useRef(null)
    const inp2 = useRef(null)
    const inpLogo = useRef(null)
    const imgLog = useRef()
    const [colorP, setColorP] = useState('#FFFFFF')
    const [colorS, setColorS] = useState('#FFFFFF')
    const [logo, setLogo] = useState("/assets/logo.png")
    const[formValues,handleInputChange] = useForm('')
   
   
    const handleColorP = (e) => {

        setColorP(inp1.current.value) 
    }
    const handleColorS = (e) => {

        setColorS(inp2.current.value)  
    }
    //Funcino para previsualizar el logo despues de subido por el input 
    const handleInputLogo = () => {
        var preview = document.querySelector('img');
        var file    = document.querySelector('input[type=file]').files[0];
        var reader  = new FileReader();
        reader.onloadend = function () {
          preview.src = reader.result; 
          setLogo(preview.src) 
        }
        if (file) {
          reader.readAsDataURL(file);
        } else {
          preview.src = "";
        }
      }

   
    const handleCustom = (e) => {
    e.preventDefault()
    dispatch(customs(colorP,colorS,formValues,logo));
    history.push('/custom/menu')
    }
    const handleLogout = (e) => {
        dispatch(loggout())
        console.log("deslogueado")
    }
  
    
    return (
        <div className="content__custom">
            

            <form className="form__custom" onSubmit={handleCustom}>
                <h1 className="title__custom">Personalizar Menu</h1>
                <div className="content__input">
                    <label className="text__input">Escoger Color primario</label>
                    <input ref={inp1} value={colorP} onChange={handleColorP} type="color" color="secondary" />
                </div>
                <div className="content__input">
                    <label className="text__input">Escoger Color secundario</label>
                    <input ref={inp2} value={colorS} onChange={handleColorS} type="color" color="secondary" />
                </div>   

                <div className="content__logo">
                    <label className="text__input"> Subir Logo</label>
                    <div className="logo">
                    <img ref={imgLog}  src={logo} className="logo" alt="logo"></img>
                    </div>
                    <Input ref={inpLogo} type="file" onChange={handleInputLogo} accept="image/*"/>
                   
                 </div> 
                

                 <div className="content__input ">
                     <label className="text__input">Nombre</label>
                     <input 
                     className="input__empresa"
                     type="text" 
                     name="NombreE" 
                     placeholder="Nombre de la empresa"
                     onChange={handleInputChange}></input>
                     
                     </div> 
                     <div className="content__input ">
                     <label className="text__input">Telefono</label>
                     <input 
                     className="input__empresa"
                     type="text" 
                     name="telefono" 
                     placeholder="Telefono"
                     onChange={handleInputChange}></input>
                     
                     </div> 
                     <div className="content__input ">
                     <label className="text__input">Direccion</label>
                     <input 
                     className="input__empresa"
                     type="text" 
                     name="direccion" 
                     placeholder="Direccion"
                     onChange={handleInputChange}></input>
                     
                     </div> 

                     <Button
                     className="btn"
                     variant="contained" 
                     type="submit"
                     color="secondary"
                     style={{marginTop: '40px'}}>Aceptar</Button>

            </form> <Button className="btn" onClick={handleLogout} color="secondary" variant="contained">Logout</Button>
           
        </div>
    )
}



