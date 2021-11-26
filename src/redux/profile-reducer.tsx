const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_ TEXT'
const ADD_POST = 'ADD_POST'


export type PostType = {
    id: number
    message: string
    likesCounts: number
}

export type PostTypeProps = {
    posts: PostType[]
    newPostText: string
}
let initialState: PostTypeProps  = {

    posts: [
        {id: 1, message: 'Hi my friend', likesCounts: 20},
        {id: 2, message: 'How are you', likesCounts: 15},
    ],
    newPostText: ""
}

export const profileReducer = (state = initialState, action: ProfileActionType) => {

    switch (action.type) {
        case ADD_POST : {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCounts: 12,
            }
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy
        }
        case UPDATE_NEW_POST_TEXT : {
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts]
            stateCopy.newPostText = action.newText;
            return stateCopy
        }
        default  :
            return state
    }
}
export type ProfileActionType = AddPostType & UpdateNewPostTexType
export type AddPostType = ReturnType<typeof addPostAC>
export const addPostAC = () => {
    return {
        type: ADD_POST
    }
}
export type UpdateNewPostTexType = ReturnType<typeof updateNewPostTextAC>
export const updateNewPostTextAC = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText
    }
}

export default profileReducer;