
import {AppThunk} from "./redux-store";
import {getAuthUserDataTC, SetAuthUserDataType} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

type initialStateType = {
    initialized: boolean
}

let initialState: initialStateType = {
    initialized: false
}

export const appReducer = (state = initialState, action: AppActionType) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export type SettInitializedSuccessType = ReturnType<typeof InitializedSuccess>
export const InitializedSuccess = () => {
    return {
        type: INITIALIZED_SUCCESS
    } as const
}

export const initializeAppTC = ():AppThunk => {
    return (dispatch: any) => {
        let promise = dispatch(getAuthUserDataTC())
        promise.then(() =>
            dispatch(InitializedSuccess())
        )

    }
}

export type AppActionType = SettInitializedSuccessType | SetAuthUserDataType