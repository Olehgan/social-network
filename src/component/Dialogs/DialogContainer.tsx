import React from "react";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {DialogsPropsType, sendMessageAC, updateNewMessageTextAC} from "../../redux/dialog-reducer";
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
    dialogsPage:DialogsPropsType
}

type MDTP = {
    onSendMessageClick :()=>void
    onUpdateNewMessageChange: (newMessage:string)=>void
}

let mapSteToProps = (state: AppStateType):MSTP => {
    return {
        dialogsPage:state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch : Dispatch):MDTP => {
    return {
        onSendMessageClick :()=>{
            dispatch(sendMessageAC())
        },
        onUpdateNewMessageChange: (newMessage:string)=>{
            dispatch(updateNewMessageTextAC(newMessage))
        }

    }
}

export const DialogContainer = connect<MSTP,MDTP,{},AppStateType>(mapSteToProps, mapDispatchToProps)(Dialogs);