import {Dispatch} from "redux";
import {userAPI} from "../api/Api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_USERS_COUNT'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOW_PROGRESS = 'TOGGLE_FOLLOW_IS_PROGRESS'


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
    totalCount: number
    error: string
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

let initialState: UsersTypeProps = {
    users: [],
    totalCount: 0,
    pageSize: 5,
    currentPage: 1,
    error: '',
    isFetching: false,
    followingInProgress: []
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
                ...state, currentPage: action.currentPage
            }

        case SET_TOTAL_COUNT:
            return {
                ...state, totalCount: action.totalCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOW_PROGRESS:
            debugger
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

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


export type ToggleIsFetchingType = ReturnType<typeof toggleIsFetching>
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    } as const
}

export type SetToggleFollowingProgressType = ReturnType<typeof setToggleFollowingProgress>
export const setToggleFollowingProgress = (isFetching: boolean, userId: number) => {
    debugger
    return {

        type: TOGGLE_IS_FOLLOW_PROGRESS,
        isFetching,
        userId
    } as const
}


export const getUsersTC = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        debugger
        dispatch(toggleIsFetching(true))
        userAPI.getUsers(currentPage, pageSize)
            .then(res => {
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(res.data.items))
                dispatch(setTotalUsersCount(res.data.totalCount))
            })
    }
}


export const followTC = (id: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setToggleFollowingProgress(true, id))
        userAPI.postFollow(id).then(res => {
            if (res.data.resultCode === 0) {
                follow(id)
            }
            dispatch(setToggleFollowingProgress(false, id))
        })

    }
}


export const unfollowTC = (id: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setToggleFollowingProgress(true, id))
        userAPI.postFollow(id).then(res => {
            if (res.data.resultCode === 0) {
                unfollow(id)
            }
            dispatch(setToggleFollowingProgress(false, id))
        })

    }
}

export type UsersActionType =
    FollowType
    | UnfollowType
    | SetUsersType
    | SetUsersCountType
    | SetTotalCountType
    | ToggleIsFetchingType
    | SetToggleFollowingProgressType

export default usersReducer;
