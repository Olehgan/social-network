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
    let dialogsData =[
        {id:1, name :'Oleg'},
        {id:2, name :'Dimas'},
        {id:3, name :'Any'},
        {id:4, name :'Ilia'},
    ]

    let messagesData =[
        {id:1, message:'How are you'},
        {id:2, message:'How are you'},
        {id:3, message:'How are you'},

    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItems name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItems name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItems name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItems  name={dialogsData[3].name} id={dialogsData[3].id}/>

            </div>
            <div className={s.messages}>
                <Messages message={messagesData[0].message}/>
                <Messages message={messagesData[1].message}/>
                <Messages message={messagesData[2].message}/>
            </div>
        </div>
    )
}
