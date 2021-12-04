const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_USERS_COUNT = 'SET_USERS_COUNT'


export type UsersType = {
    name: string,
    id: number,
    photos: {
        small: string
        large: string
    }
    status: string | null,
    followed: boolean
}

export  type UsersTypeProps = {
    users: UsersType[]
    totalCount:number
    error:string
    pageSize:number
    currentPage:number
}

let initialState: UsersTypeProps = {
    users: [],
    totalCount:30,
    pageSize:5,
    currentPage:3,
    error:''
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
                users: [...action.users]
            }
        case SET_USERS_COUNT :
            return {
                ...state, currentPage:action.currentPage
            }

        default:
            return state
    }
}

export type UsersActionType = FollowType | UnfollowType | SetUsersType | SetUsersCountType
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
export type SetUsersCountType = ReturnType<typeof setUsersCountAC>
export const setUsersCountAC = (currentPage: number) => {
    return {
        type: SET_USERS_COUNT,
        currentPage
    } as const
}
export default usersReducer;