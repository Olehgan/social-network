const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'


export type UsersType = {
    name: string,
    id: number,
    photos: {
        small: string | null
        large: string | null
    }
    status: string | null,
    followed: boolean
}
export  type UsersTypeProps = {
    users: UsersType[]
}

let initialState: UsersTypeProps = {
    users: [],
}

export const usersReducer = (state = initialState, action: UsersActionType) => {
    switch (action.type) {

        case FOLLOW :
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }
        case UNFOLLOW :
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
            }
        case SET_USERS :
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}

export type UsersActionType = FollowType | UnfollowType | SetUsersType
export type FollowType = ReturnType<typeof followAC>
export const followAC = (userId: number) => {
    return {
        type: FOLLOW,
        userId
    } as const
}
export type UnfollowType = ReturnType<typeof unfollowAC>
export const unfollowAC = (userId: number) => {
    return {
        type: UNFOLLOW,
        userId
    } as const
}
export type SetUsersType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: UsersType[]) => {
    return {
        type: SET_USERS,
        users
    } as const
}
export default usersReducer;