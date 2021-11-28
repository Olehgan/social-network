import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unfollowAC, UserType} from "../../redux/users-reducer";


type MSTP  = {
    users:UserType[]
}

type MDTP  = {
    follow: (userId: number) =>void
    unfollow: (userId: number) => void
    setUsers: (users:any) => void
}

let mapStateToProps = (state: AppStateType):MSTP => {
    return {
        users: state.usersPage.users
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
        setUsers: (users:UserType[]) => {
            dispatch(setUsersAC(users))
        },

    }
}

export const UsersContainer = connect<MSTP,MDTP,{},AppStateType>(mapStateToProps, mapDispatchToProps)(Users)