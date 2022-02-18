import {AnyAction} from "redux";
import {authAPI, LoginParamsType} from "../api/Api";
import {AppThunk} from "./redux-store";

const SET_USER_DATA = 'SET_USER_DATA'
const SET_IS_AUTH = 'SET_IS_AUTH'


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
export  type AuthLoginType = {
    resultCode: number,
    messages: string[],
    data: {
        userId: string
    }
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


export const authReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case SET_IS_AUTH:
            return {...state, isAuth: action.value}

        default:
            return state
    }
}

export type SetAuthUserDataType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (id: number, login: string, email: string) => {
    return {
        type: SET_USER_DATA,
        data: {id, login, email}
    } as const
}

export type setIsAuthType = ReturnType<typeof setIsAuth>
export const setIsAuth = (value: boolean) => {
    return {
        type: SET_IS_AUTH,
        value
    } as const
}
//
// export const getAuthUserDataTC = (): AppThunk => {
//     return (dispatch: Dispatch) => {
//         return authAPI.me().then(res => {
//             if (res.data.resultCode === 0) {
//                 let {id, login, email} = res.data.data
//                 dispatch(setAuthUserData(id, login, email))
//             }
//         })
//     }
// }

export const getAuthUserDataTC = (): AppThunk => async dispatch => {
    try {
        const res = await authAPI.me()
        if (res.data.resultCode === 0) {
            let {id, login, email} = res.data.data
            dispatch(setAuthUserData(id, login, email))
        }
    } catch (e:any) {
        throw new Error(e)
    }
}


export const loginTC = (data: LoginParamsType): AppThunk => {
    return (dispatch) => {
        authAPI.login(data).then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setIsAuth(true))
            }
        })
    }
}
export const logoutTC = (): AppThunk => {
    return (dispatch) => {
        authAPI.logout().then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setIsAuth(false))
            }
        })
    }
}

export type AuthActionType = SetAuthUserDataType | setIsAuthType