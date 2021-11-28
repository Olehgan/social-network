const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'


export type UserType = {
    id: number,
    photos: string
    followed: boolean,
    fullName: string,
    status: string,
    location: {
        country: string,
        city: string
    }
}
export  type UsersTypeProps = {
    users: UserType[]
}

let initialState: UsersTypeProps = {
    users: [],

}

export const usersReducer = (state = initialState, action: UsersActionType) => {
    debugger
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
export const setUsersAC = (users: UserType[]) => {
    return {
        type: SET_USERS,
        users
    } as const
}
export default usersReducer;