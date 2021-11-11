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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItems name={'Oleg'} id={1}/>
                <DialogItems name={'Dimas'} id={2}/>
                <DialogItems name={'Any'} id={3}/>
                <DialogItems name={'Ilia'} id={4}/>

            </div>
            <div className={s.messages}>
                <Messages message={'How are you'}/>
                <Messages message={'Hello!!!!\n'}/>
                <Messages message={'Hi!!'}/>
            </div>
        </div>
    )
}
