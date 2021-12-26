import React from 'react';
import style from './Header.module.css'
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    login: string
    isAuth: boolean
}

export const Header = (props: HeaderPropsType) => {
    debugger
    return (

        <header className={style.header}>
            <NavLink to={'/profile'}><img src='https://i.pinimg.com/236x/71/b3/e4/71b3e4159892bb319292ab3b76900930.jpg'
                                          alt={'image'}/></NavLink>
            <div className={style.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}> Login</NavLink>}
            </div>
        </header>
    )
}
