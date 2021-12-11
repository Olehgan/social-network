import React from "react";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {DialogsPropsType, sendMessage, updateNewMessageText} from "../../redux/dialogs-reducer";
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
    sendMessage: () => void
    updateNewMessageText: (newMessage: string) => void
}

let mapSteToProps = (state: AppStateType): MSTP => {
    return {
        dialogsPage: state.dialogsPage
    }
}
// let mapDispatchToProps = (dispatch : Dispatch):MDTP => {
//     return {
//         onSendMessageClick :()=>{
//             dispatch(sendMessageAC())
//         },
//         onUpdateNewMessageChange: (newMessage:string)=>{
//             dispatch(updateNewMessageText(newMessage))
//         }
//
//     }
// }

export const DialogContainer = connect<MSTP, MDTP, {}, AppStateType>(mapSteToProps, {
    sendMessage, updateNewMessageText

})(Dialogs);