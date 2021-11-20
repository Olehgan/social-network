const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_ TEXT'
const ADD_POST = 'ADD_POST'
const SEND_MESSAGE = 'SEND_MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'


export type DialogType = {
    id: number
    name: string
}

export  type MessageType = {
    id: number
    message: string
}

export type PostType = {
    id: number
    message: string
    likesCounts: number
}
export type DialogsPropsType = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessage: string
}

export type PostTypeProps = {
    posts: PostType[]
    newPostText: string
}


export type StateType = {
    profilePage: PostTypeProps,
    dialogPage: DialogsPropsType
}
export type RootStoreType = {
    _state: StateType
    _callSubscriber: (state: StateType) => void
    getState: () => void
    subscribe: (observer: any) => void
    dispatch: (action: any) => void
}

let store: any = {
    _state: {

        profilePage: {
            posts: [
                {id: 1, message: 'Hi my friend', likesCounts: 20},
                {id: 2, message: 'How are you', likesCounts: 15},
            ],
            newPostText: ""
        },
        dialogPage: {
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
        },

    },
    _callSubscriber(_state: StateType) {
        console.log("d")
    },
    getState() {
        return this._state
    },
    subscribe(observer: any) {
        this._callSubscriber = observer;
    },
    dispatch(action: any) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCounts: 12,
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogPage.newMessage = action.body
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogPage.newMessage;
            this._state.dialogPage.messages.push({id: 4, message: body})
            this._callSubscriber(this._state)
        }
    }
}

// export type AddPostType = ReturnType<typeof addPostAC>
export const addPostAC = () => {
    return {
        type: ADD_POST
    }
}
// export type UpdateNewPostTexType = ReturnType<typeof updateNewPostTextAC>
export const updateNewPostTextAC = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText
    }
}
// export type SendMessageType = ReturnType<typeof sendMessageAC>
export const sendMessageAC = () => {
    return {
        type: SEND_MESSAGE
    }
}
// export type UpdateNewMessageTexType = ReturnType<typeof updateNewMessageTextAC>
export const updateNewMessageTextAC = (body: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        body
    }
}
export default store;


