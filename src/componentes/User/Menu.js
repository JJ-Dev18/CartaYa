import React from 'react'
import {useSelector} from 'react-redux'
import '../styles/menu.css'
import { CustomMenu } from './CustomMenu';
import { Link } from 'react-router-dom';

export const Menu = () => {

    const {colorP,colorS,url} = useSelector( state => state.custom );
    console.log(url)
    return (
        <div className="content__menu" style={{backgroundColor:colorP}}>
            <div className="menu">
                {/* <CustomMenu/> */}
                <nav className="nav__menu" style={{backgroundColor:colorS}} >
                <div className="logo">
                <img src={url} alt="logo"></img>
                 </div>   
                    <ul className="list__nav"> 
                        <li className="item__nav">Entradas</li>
                        <li className="item__nav">Platos Fuertes</li>
                        <li className="item__nav">Postres</li>
                        <li className="item__nav">Bebidas</li>
                    </ul>
                    
                </nav>
                <div className="content__menu-info">
                    <h1>Menu</h1
                    ></div>
                
                <Link to="/drap"> drap and drop </Link>
            </div>
           
        </div>
        
    )
}
