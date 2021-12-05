import React from "react";
import {UsersType} from "../../redux/users-reducer";
import axios from "axios";
import {Users} from "./Users";

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
