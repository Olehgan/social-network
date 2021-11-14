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
}


export type RootState = {
    profilePage: PostTypeProps,
    messagePage: DialogsPropsType
}
export let state: RootState = {

    profilePage: {
        posts: [
            {id: 1, message: 'Hi my friend', likesCounts: 20},
            {id: 2, message: 'How are you', likesCounts: 15},
        ]
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
}
