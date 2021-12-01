import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
<<<<<<< HEAD
import {followAC, setUsersAC, unfollowAC, UserType} from "../../redux/users-reducer";


type MSTP  = {
    users:UserType[]
=======
import {followAC, setUsersAC, unfollowAC, UsersType} from "../../redux/users-reducer";


type MSTP  = {
    users:UsersType[]
>>>>>>> ce28705 (make API request)
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
<<<<<<< HEAD
        setUsers: (users:UserType[]) => {
=======
        setUsers: (users:UsersType[]) => {
>>>>>>> ce28705 (make API request)
            dispatch(setUsersAC(users))
        },

    }
}

export const UsersContainer = connect<MSTP,MDTP,{},AppStateType>(mapStateToProps, mapDispatchToProps)(Users)