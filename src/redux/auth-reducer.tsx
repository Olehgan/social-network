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
debugger
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
    debugger
    return {
        type: SET_USER_DATA,
        data
    }
}

export type AuthActionType = SetAuthUserData