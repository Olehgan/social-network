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
}

export type PostTypeProps = {
    posts: PostType[]
    newPostText: string
}


export type StateType = {
    profilePage: PostTypeProps,
    messagePage: DialogsPropsType
}
let store  = {
    _state: {

        profilePage: {
            posts: [
                {id: 1, message: 'Hi my friend', likesCounts: 20},
                {id: 2, message: 'How are you', likesCounts: 15},
            ],
            newPostText: ""
        },
        messagePage: {
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
        }
    },
    getState() {
        return this._state
    },
    _callSubscriber(state: StateType) {
        console.log("dsdfsfsdf")
    },
    subscribe(observer: any) {
        this._callSubscriber = observer;
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCounts: 12,
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state)
    },
    updatePostText(newText: string) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    }
}
export default store;


