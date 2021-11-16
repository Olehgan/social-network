import {rerenderEntireTree} from "../render/render";

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
    newPostText:string
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
        ],
        newPostText:"it-ti"
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
export  let addPost = ()=>{
    let newPost= {
        id:5,
        message : state.profilePage.newPostText,
        likesCounts:12,
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state)
}
export  let updatePostText = (newText:string)=>{
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}