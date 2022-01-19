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

export type SettInitializedSuccessType = ReturnType<typeof setInitializedSuccess>
export const setInitializedSuccess = () => {
    return {
        type: INITIALIZED_SUCCESS
    } as const
}

export type AppActionType = SettInitializedSuccessType