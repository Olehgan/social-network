import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {DialogItems} from "./DialogItem/DialogItem";
import {Messages} from "./Message/Message";
import {DialogsPropsType} from "../../redux/dialog-reducer";

export type DialogsProps = {
    onSendMessageClick: () => void
    onUpdateNewMessageChange: (newMessage: string) => void
    state: DialogsPropsType

}

export const Dialogs = (props: DialogsProps) => {
    let state = props.state

    let dialogsElement = state.dialogs.map((d) => <DialogItems name={d.name} id={d.id}/>)
    let messagesElement = state.messages.map((m) => <Messages message={m.message}/>)
    let newMessage = state.newMessage

    let onSendMessageClickHandler = () => {
      props.onSendMessageClick()

    }

    let onUpdateNewMessageChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        newMessage = e.currentTarget.value
        props.onUpdateNewMessageChange(newMessage)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div>{messagesElement}</div>
                <div>
                    <div>
                        <textarea placeholder='Enter text' value={newMessage}
                                  onChange={onUpdateNewMessageChangeHandler}> </textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClickHandler}>
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

