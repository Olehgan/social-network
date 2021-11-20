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

export const profileReducer = (state: PostTypeProps, action: any) => {
    switch (action.type) {
        case ADD_POST : {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCounts: 12,
            }
            state.posts.push(newPost);
            state.newPostText = '';
            return state
        }
        case UPDATE_NEW_POST_TEXT : {
            state.newPostText = action.newText;
            return state
        }
    }

    return state
}
export type profileActionType = AddPostType & UpdateNewPostTexType
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