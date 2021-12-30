import React from "react";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {DialogsPropsType, sendMessage} from "../../redux/dialogs-reducer";
import {withAuthNavigate} from "../../hoc/withAuthNavigate";
//
//
// export type DialogsProps = {
//     // newMessage  : DialogsPropsType
// }

// export const DialogContainer = (props: DialogsProps) => {
//
// return (
//     <StoreContext.Consumer>
//         {
//             (store: any) => {
//                 let state = store.getState()
//
//                 let onSendMessageClick = () => {
//                     store.dispatch(sendMessageAC())
//                 }
//                 let onUpdateNewMessageChange = (newMessage: string) => {
//                     store.dispatch(updateNewMessageTextAC(newMessage))
//                 }
//                 return <Dialogs state={state}
//                                 onSendMessageClick={onSendMessageClick}
//                                 onUpdateNewMessageChange={onUpdateNewMessageChange}/>
//
//             }
//         }
//     </StoreContext.Consumer>
// )


// }

type MSTP = {
    dialogsPage: DialogsPropsType
}


type MDTP = {
    sendMessage: (newMessage:string) => void
    // updateNewMessageText: (newMessage: string) => void
}

let mapSteToProps = (state: AppStateType): MSTP => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

export const DialogContainer = connect<MSTP, MDTP, {}, AppStateType>(mapSteToProps, {
    sendMessage,
    // updateNewMessageText

})(withAuthNavigate(Dialogs));

// export const DialogContainer = compose<React.ComponentType>(
//     connect<MSTP, MDTP, {}, AppStateType>(mapSteToProps, {
//         sendMessage, updateNewMessageText
//     }),
//     withAuthNavigate
//     (Dialogs)
// )
