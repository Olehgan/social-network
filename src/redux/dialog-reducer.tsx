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

export const dialogsReducer = (state: DialogsPropsType, action: DialogsActionType) => {
    switch (action.type) {
        case SEND_MESSAGE : {
            let body = state.newMessage;
            state.messages.push({id: 4, message: body})
            state.newMessage = '';
            return state
        }

        case UPDATE_NEW_MESSAGE_TEXT : {
            state.newMessage = action.body
            return state
        }

    }

    return state
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