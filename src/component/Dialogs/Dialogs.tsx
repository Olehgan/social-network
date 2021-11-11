import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.dialog +' '+ s.active}>
                  <NavLink to={'/dialogs'} >Oleg</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs'} >Dimas</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs'} >Any</NavLink>

                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs'} > Ilia</NavLink>
                </div>
            </div>
                <div className={s.messages}>
                    <div className={s.message}>
                        How are you?
                    </div>
                    <div className={s.message}>
                        Hello!!!!
                    </div>
                    <div className={s.message}>
                        Hi!!
                    </div>
                </div>


        </div>
    )
}
