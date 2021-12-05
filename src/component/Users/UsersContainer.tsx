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
import {Users} from "./Users";
import axios from "axios";


type MSTP = {
    users: UsersType[]
    totalCount: number
    pageSize: number
    currentPage: number

}

type MDTP = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalUserCount: number) => void
}


type UsersAPITypeProps = {
    users: UsersType[]
    follow: (userId: number) => void
    setCurrentPage: (currentPage: number) => void
    setUsers: (users: UsersType[]) => void
    setTotalUsersCount: (totalUserCount: number) => void
    unfollow: (userId: number) => void
    totalCount: number
    pageSize: number
    currentPage: number
}

export class UsersAPIComponent extends React.Component<UsersAPITypeProps> {

    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count{this.props.pageSize}`).then(res => {
                this.props.setUsers(res.data.items)
                this.props.setTotalUsersCount(res.data.totalCount)
            })
        }
    }

    onPageChange = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
            })
    }

    render() {
        return <Users onPageChange={this.onPageChange}
                      currentPage={this.props.currentPage}
                      pageSize={this.props.pageSize}
                      totalCount={this.props.totalCount}
                      unfollow={this.props.unfollow}
                      follow={this.props.follow}
                      users={this.props.users}
        />;
    }
}


let mapStateToProps = (state: AppStateType): MSTP => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage

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
        setUsers: (users: UsersType[]) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalCountAC(totalCount))
        }
    }
}

export const UsersContainer = connect<MSTP, MDTP, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)