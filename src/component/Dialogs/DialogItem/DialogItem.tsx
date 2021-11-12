import React from "react";
import {NavLink} from "react-router-dom";
import s from './DialogItem.module.css'

type DialogItemsPropsType = {
    name: string
    id: number
}

export const DialogItems = (props: DialogItemsPropsType) => {
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={'/dialogs' + props.id}>{props.name}</NavLink>
    </div>

}

