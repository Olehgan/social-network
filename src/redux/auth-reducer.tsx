import {Dispatch} from "redux";
import {authAPI} from "../api/Api";

const SET_USER_DATA = 'SET_USER_DATA'


export  type AuthMeType = {
    data: {
        login: string,
        id: number,
        email: string
    },
    resultCode: number,
    messages: string[],
    fieldsErrors: string[],
}
export type  InitialStateType = {
    id: number,
    email: string,
    login: string,
    isAuth: boolean
}


let initialState: InitialStateType = {

    id: 1,
    email: '',
    login: '',
    isAuth: false
}


export const authReducer = (state = initialState, action: AuthActionType) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

export type SetAuthUserData = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (id: number, login: string, email: string) => {
    return {
        type: SET_USER_DATA,
        data: {id, login, email}
    } as const
}

export const getAuthMeTC = ()=> {
    return (dispatch: Dispatch) => {
        authAPI.me().then(res => {
            if (res.data.resultCode === 0) {
                let{id,login,email} = res.data.data
                dispatch(setAuthUserData(id,login,email))
            }
        })
    }

}

export type AuthActionType = SetAuthUserData