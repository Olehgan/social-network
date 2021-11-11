import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


type DialogItemsPropsType = {
    name: string
    id: number
}

const DialogItems = (props: DialogItemsPropsType) => {
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={'/dialogs' + props.id}>{props.name}</NavLink>
    </div>

}

type MesagesTypeProps = {
    message: string
}
const Messages = (props: MesagesTypeProps) => {
    return <div className={s.message}>
        {props.message}
    </div>
}
export const Dialogs = () => {
    let dialogs = [
        {id: 1, name: 'Oleg'},
        {id: 2, name: 'Dimas'},
        {id: 3, name: 'Any'},
        {id: 4, name: 'Ilia'},
    ]
let dialogsElement=dialogs.map((d)=>  <DialogItems name={d.name} id={d.id}/>)
    let messages = [
        {id: 1, message: 'How are you'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'How are you'},
    ]
    let messagesElement = messages.map((m) => <Messages message={m.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>
    )
}
