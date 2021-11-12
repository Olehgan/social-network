import React from "react";
import s from './Message.module.css'


type MessagesTypeProps = {
    message: string
}
export const Messages = (props: MessagesTypeProps) => {
    return <div className={s.message}>
        {props.message}
    </div>
}
