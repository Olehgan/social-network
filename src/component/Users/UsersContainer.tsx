import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalCountAC,
    setUsersAC,
    unfollowAC,
    UsersType
} from "../../redux/users-reducer";
import {UsersAPIComponent} from "./UsersAPIComponent";


type MSTP  = {
    users:UsersType[]
    totalCount:number
    pageSize:number
    currentPage:number

}

type MDTP  = {
    follow: (userId: number) =>void
    unfollow: (userId: number) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (pageNumber:number) =>void
    setTotalUsersCount: (totalUserCount:number)=>void
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
       setCurrentPage: (pageNumber:number) => {
        dispatch(setCurrentPageAC(pageNumber))
    },
        setTotalUsersCount: (totalCount:number)=>{
            dispatch(setTotalCountAC(totalCount))
        }
    }
}

export const UsersContainer = connect<MSTP,MDTP,{},AppStateType>(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)