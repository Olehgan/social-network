const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_ TEXT'
const ADD_POST = 'ADD_POST'
const SET_USER_PROFILE = 'SET_USERS_PROFILE'

export type ProfileType = {
    aboutMe:string,
    contacts: {
        facebook: string,
        "website": null,
        "vk": string,
        "twitter": string,
        "instagram": string,
        "youtube": null,
        "github": string,
        "mainLink": null
    },
    "lookingForAJob": true,
    "lookingForAJobDescription":string,
    "fullName":string,
    "userId": number,
    "photos": {
        "small": string,
        "large":string
    }
}| null
export type PostType = {
    id: number
    message: string
    likesCounts: number
}

export type PostTypeProps = {
    posts: PostType[]
    newPostText: string
    profile:ProfileType
}
let initialState: PostTypeProps = {
    newPostText: "",
    posts: [
        {id: 1, message: 'Hi my friend', likesCounts: 20},
        {id: 2, message: 'How are you', likesCounts: 15},
    ],
    profile: null,
}

export const profileReducer = (state = initialState, action: ProfileActionType) => {

    switch (action.type) {
        case ADD_POST :
            return {
                ...state,
                posts: [...state.posts, {id: 5, message: state.newPostText, likesCounts: 12,}],
                newPostText: ''
            }
        // let newPost = {
        //     id: 5,
        //     message: state.newPostText,
        //     likesCounts: 12,
        // }
        // let stateCopy = {...state};
        // stateCopy.posts = [...state.posts]
        // stateCopy.posts.push(newPost);
        // stateCopy.newPostText = '';
        // return stateCopy

        case UPDATE_NEW_POST_TEXT :
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE :
            return {
                ...state,
                profile: action.profile
            }

        default  :
            return state
    }
}
export type ProfileActionType = AddPostType & UpdateNewPostTexType & SetUserProfileType
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
export type SetUserProfileType = ReturnType<typeof setUserProfile>
export const setUserProfile = (profile: ProfileType) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}


export default profileReducer;