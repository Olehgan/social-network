const SET_USER_DATA = 'SET_USER_DATA'


export  type DataType = {
    id: number,
    email: string,
    login: string
}
export type  AuthMeType = {
    resultCode: number
    messages: string[],
    data: DataType
}


let initialState: AuthMeType = {
    data:{
        login:'',
        id:1,
        email:''
    },
    resultCode: 0,
    messages: [],
}

export type initialStateType = typeof initialState

export const authReducer = (state: initialStateType, action: AuthActionType) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
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

export type AuthActionType = SetAuthUserData