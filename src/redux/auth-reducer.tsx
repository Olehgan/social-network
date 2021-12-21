import {Dispatch} from "redux";
import {authAPI} from "../api/Api";

const SET_USER_DATA = 'SET_USER_DATA'


export  type DataType = {
    id: number,
    email: string,
    login: string
}
export type  AuthMeType = {
    resultCode: number
    fieldsErrors: string[]
    messages: string[]
    data: DataType
    isAuth:boolean
}


let initialState: AuthMeType = {
    data:{
        login:'',
        id:1,
        email:''
    },
    resultCode: 0,
    messages: [],
    fieldsErrors: [],
    isAuth:false
}



export const authReducer = (state= initialState, action: AuthActionType) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth:true
            }
        default:
            return state
    }
}

export type SetAuthUserData = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (data: DataType) => {
    return {
        type: SET_USER_DATA,
        data
    }
}

export const getAuthMeTC = ()=> {
    return  (dispatch:Dispatch)=>{
        authAPI.me().then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setAuthUserData(res.data.data))
            }
        })
    }

}

export type AuthActionType = SetAuthUserData