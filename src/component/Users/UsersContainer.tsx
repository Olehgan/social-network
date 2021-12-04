import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {followAC, setUsersAC, setUsersCountAC, unfollowAC, UsersType} from "../../redux/users-reducer";


type MSTP  = {
    users:UsersType[]
    totalCount:number
    pageSize:number
    currentPage:number

}

type MDTP  = {
    follow: (userId: number) =>void
    unfollow: (userId: number) => void
    setUsers: (users:any) => void
    setUsersCount: (currentPage:number) =>void
}

let mapStateToProps = (state: AppStateType):MSTP => {
    return {
        users: state.usersPage.users,
        totalCount:state.usersPage.totalCount,
        pageSize:state.usersPage.pageSize,
        currentPage:state.usersPage.currentPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users:UsersType[]) => {
            dispatch(setUsersAC(users))
        },
       setUsersCount: (currentPage:number) => {
        dispatch(setUsersCountAC(currentPage))
    },
    }
}

export const UsersContainer = connect<MSTP,MDTP,{},AppStateType>(mapStateToProps, mapDispatchToProps)(Users)