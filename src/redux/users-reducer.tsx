const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_USERS_COUNT'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const  TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'


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
    isFetching: boolean
}

let initialState: UsersTypeProps = {
    users: [],
    totalCount:0,
    pageSize:5,
    currentPage:1,
    error:'',
    isFetching: false
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
                users: action.users
            }
        case SET_CURRENT_PAGE :
            return {
                ...state, currentPage:action.currentPage
            }

        case SET_TOTAL_COUNT:
            return {
                ...state,totalCount:action.totalCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,isFetching:action.isFetching
            }
        default:
            return state
    }
}

export type UsersActionType = FollowType | UnfollowType | SetUsersType | SetUsersCountType|SetTotalCountType|ToggleISFetchingType

export type FollowType = ReturnType<typeof follow>
export const follow = (userId: number) => {
    return {
        type: FOLLOW,
        userId
    } as const
}

export type UnfollowType = ReturnType<typeof unfollow>
export const unfollow = (userId: number) => {
    return {
        type: UNFOLLOW,
        userId
    } as const
}

export type SetUsersType = ReturnType<typeof setUsers>
export const setUsers = (users: UsersType[]) => {
    return {
        type: SET_USERS,
        users
    } as const
}

export type SetUsersCountType = ReturnType<typeof setCurrentPage>
export const setCurrentPage = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    } as const
}

export type SetTotalCountType = ReturnType<typeof setTotalUsersCount>
export const setTotalUsersCount = (totalCount: number) => {
    return {
        type: SET_TOTAL_COUNT,
        totalCount
    } as const
}

export type ToggleISFetchingType = ReturnType<typeof toggleIsFetching>
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    } as const
}

export default usersReducer;
