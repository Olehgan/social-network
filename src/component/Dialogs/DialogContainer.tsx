import React from "react";
import {DialogsPropsType, StoreType} from "../../redux/store";
import {sendMessageAC, updateNewMessageTextAC} from "../../redux/dialog-reducer";
import {Dialogs} from "./Dialogs";

export type DialogsProps = {
    store: StoreType
    newMessage  : DialogsPropsType
}

export const DialogContainer = (props: DialogsProps) => {
    let state = props.store._state.dialogPage



    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageAC())

    }

    let onUpdateNewMessageChange = (newMessage:string) => {

        props.store.dispatch(updateNewMessageTextAC(newMessage))
    }
    return (
       <Dialogs state={state} onSendMessageClick={onSendMessageClick} onUpdateNewMessageChange={onUpdateNewMessageChange}/>
    )
}


