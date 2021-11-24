import React from "react";
import {sendMessageAC, updateNewMessageTextAC} from "../../redux/dialog-reducer";
import {Dialogs} from "./Dialogs";
import StoreContext from "../../StoreContext";

export type DialogsProps = {
    // newMessage  : DialogsPropsType
}

export const DialogContainer = (props: DialogsProps) => {
    // let state = props.store._state.dialogPage
    //
    // let onSendMessageClick = () => {
    //     props.store.dispatch(sendMessageAC())
    // }
    // let onUpdateNewMessageChange = (newMessage:string) => {
    //     props.store.dispatch(updateNewMessageTextAC(newMessage))
    // }
    return (
        <StoreContext.Consumer >
            {
                (store)=>{
                    let state = store._state.dialogPage

                    let onSendMessageClick = () => {
                        store.dispatch(sendMessageAC())
                    }
                    let onUpdateNewMessageChange = (newMessage:string) => {
                        store.dispatch(updateNewMessageTextAC(newMessage))
                    }
                    return <Dialogs state={state}
                                    onSendMessageClick={onSendMessageClick}
                                    onUpdateNewMessageChange={onUpdateNewMessageChange}/>

                }
            }
        </StoreContext.Consumer>
            )
}


