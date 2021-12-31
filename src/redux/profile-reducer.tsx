import {Dispatch} from "redux";
import {profileAPI} from "../api/Api";

const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_ TEXT'
const ADD_POST = 'ADD_POST'
const SET_USER_PROFILE = 'SET_USERS_PROFILE'
const SET_STATUS = 'SET_STATUS'

export type ProfileType = {
    aboutMe: string,
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
    "lookingForAJobDescription": string,
    "fullName": string,
    "userId": number,
    "photos": {
        "small": string,
        "large": string
    }
} | null
export type PostType = {
    id: number
    message: string
    likesCounts: number
}

export type PostTypeProps = {
    posts: PostType[]
    newPostText: string
    profile: ProfileType
    status: string
}

let initialState: PostTypeProps = {
    newPostText: "",
    posts: [
        {id: 1, message: 'Hi my friend', likesCounts: 20},
        {id: 2, message: 'How are you', likesCounts: 15},
    ],
    profile: null,
    status: ""
}

export const profileReducer = (state = initialState, action: ProfileActionType) => {

    switch (action.type) {
        case ADD_POST :
            return {
                ...state,
                posts: [...state.posts, {id: 5, message: action.newPostText, likesCounts: 12,}],
                newPostText: ''
            }
        //
        // case UPDATE_NEW_POST_TEXT :
        //     return {
        //         ...state,
        //         newPostText: action.newText
        //     }
        case SET_USER_PROFILE :
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS :
            return {
                ...state,
                status: action.status
            }

        default  :
            return state
    }
}
export type AddPostType = ReturnType<typeof addPostAC>
export const addPostAC = (newPostText: string) => {
    return {
        type: ADD_POST,
        newPostText
    }
}

// export type UpdateNewPostTexType = ReturnType<typeof updateNewPostTextAC>
// export const updateNewPostTextAC = (newText: string) => {
//     return {
//         type: UPDATE_NEW_POST_TEXT,
//         newText
//     }
// }

export type SetUserProfileType = ReturnType<typeof setUserProfile>
export const setUserProfile = (profile: ProfileType) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

export type SetStatusType = ReturnType<typeof setStatus>
export const setStatus = (status: string) => {
    return {
        type: SET_STATUS,
        status
    }
}


export const getUsersProfileTC = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.getUserProfile(userId).then(res => {
            dispatch(setUserProfile(res.data))
        })
    }
}

export const getStatusTC = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.getStatus(userId).then(res => {
            dispatch(setStatus(res.data))
        })
    }
}

export const updateStatusTC = (status: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.updateStatus(status).then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
    }
}

export type ProfileActionType = AddPostType & SetUserProfileType & SetStatusType
export default profileReducer;