import React from "react";
import s from './Dialogs.module.css'
import {DialogItems} from "./DialogItem/DialogItem";
import {Messages} from "./Message/Message";
import {DialogsPropsType} from "../../redux/state";
//
// export type DialogType = {
//     id: number
//     name: string
// }
//
// export  type MessageType = {
//     id: number
//     message: string
// }
//
// export type DialogsPropsType = {
//     dialogs:DialogType[]
//     messages:MessageType[]
// }
export const Dialogs = (props:DialogsPropsType) => {

    let dialogsElement = props.dialogs.map((d) => <DialogItems name={d.name} id={d.id}/>)
    // let messages = [
    //     {id: 1, message: 'How are you'},
    //     {id: 2, message: 'How are you'},
    //     {id: 3, message: 'How are you'},
    // ]
    let messagesElement =props.messages.map((m) => <Messages message={m.message}/>)
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
