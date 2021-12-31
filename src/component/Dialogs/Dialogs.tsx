import React from "react";
import s from './Dialogs.module.css'
import {DialogItems} from "./DialogItem/DialogItem";
import {Messages} from "./Message/Message";
import {DialogsPropsType} from "../../redux/dialogs-reducer";
import {AddMessageFormContainer} from "./AddMessageForm/AddMessageFormContainer";

export type DialogsProps = {
    sendMessage: (newMessage: string) => void
    updateNewMessageText: (newMessage: string) => void
    dialogsPage: DialogsPropsType
    isAuth: boolean

}

export const Dialogs = (props: DialogsProps) => {
    let state = props.dialogsPage

    let dialogsElement = state.dialogs.map((d) => <DialogItems key={d.id} name={d.name} id={d.id}/>)
    let messagesElement = state.messages.map((m) => <Messages key={m.id} message={m.message}/>)
    // let newMessage = state.newMessage
    //
    // let onSendMessageClickHandler = () => {
    //     props.sendMessage()
    //
    // }

    // let onUpdateNewMessageChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     newMessage = e.currentTarget.value
    //     props.updateNewMessageText(newMessage)
    // }
    // if(!props.isAuth) return <Navigate to={ '/login'}/>
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div>{messagesElement}</div>
                <div>
                    {/*<div>*/}
                    {/*    <textarea placeholder='Enter text' value={newMessage}*/}
                    {/*              onChange={onUpdateNewMessageChangeHandler}> </textarea>*/}
                    {/*</div>*/}
                    {/*<div>*/}
                    {/*    <button onClick={onSendMessageClickHandler}>*/}
                    {/*        Send*/}
                    {/*    </button>*/}
                    {/*</div>*/}
                    <AddMessageFormContainer/>
                </div>
            </div>
        </div>
    )
}
