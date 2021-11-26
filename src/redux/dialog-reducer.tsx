const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'
const SEND_MESSAGE = 'SEND_MESSAGE'


export type DialogType = {
    id: number
    name: string
}

export  type MessageType = {
    id: number
    message: string
}
export type DialogsPropsType = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessage: string
}

let initialState: DialogsPropsType = {
    dialogs: [
        {id: 1, name: 'Oleg'},
        {id: 2, name: 'Dimas'},
        {id: 3, name: 'Any'},
        {id: 4, name: 'Ilia'},
    ],
    messages: [
        {id: 1, message: 'How are you'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'How are you'},
    ],
    newMessage: ""
}

export const dialogsReducer = (state= initialState, action: DialogsActionType) => {
    let stateCopy =  {
        ...state,
        messages: [...state.messages]
    }
    switch (action.type) {
        case SEND_MESSAGE : {
            let body = stateCopy.newMessage;
            stateCopy.messages.push({id: 4, message: body})
            stateCopy.newMessage = '';
            return stateCopy
        }

        case UPDATE_NEW_MESSAGE_TEXT : {
            stateCopy.newMessage = action.body
            return stateCopy
        }
        default:
            return state
    }



}

export type DialogsActionType = SendMessageType & UpdateNewMessageTexType
export type SendMessageType = ReturnType<typeof sendMessageAC>
export const sendMessageAC = () => {
    return {
        type: SEND_MESSAGE
    }
}
export type UpdateNewMessageTexType = ReturnType<typeof updateNewMessageTextAC>
export const updateNewMessageTextAC = (body: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        body
    }
}

export default dialogsReducer;