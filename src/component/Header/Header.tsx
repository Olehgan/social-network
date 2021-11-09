import React from 'react';
import style from './Header.module.css'
import {NavLink} from "react-router-dom";
export const Header = () => {
    return (
        <header className={style.header}>
         <NavLink to={'/profile'} ><img src='https://i.pinimg.com/236x/71/b3/e4/71b3e4159892bb319292ab3b76900930.jpg' alt={'image'}/></NavLink>
        </header>
    )
}
