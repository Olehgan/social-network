const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'


export type UserType = {
    id: number,
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
    users: [
        {
            id: 1, followed: false, fullName: "Oleg", status: "very good",
            location: {country: 'Belarus', city: 'Minsk',}
        },
        {
            id: 2, followed: true, fullName: "Ilia", status: "very good",
            location: {country: 'Belarus', city: 'Minsk',}
        },
        {
            id: 3, followed: false, fullName: "Kodaly", status: "very good",
            location: {country: 'Belarus', city: 'Minsk',}
        },
    ],

}

export const usersReducer = (state = initialState, action: UsersActionType) => {

    switch (action.type) {
        case FOLLOW :
            return {
                ...state,
                users: state.users.filter(u => u.id === action.userId ? {...u, followed: true} : u)
            }
        case UNFOLLOW :
            return {
                ...state,
                users: state.users.filter(u => u.id === action.userId ? {...u, followed: false} : u)
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
export const setUsersAC = (users: any) => {
    return {
        type: SET_USERS,
        users
    } as const
}
export default usersReducer;