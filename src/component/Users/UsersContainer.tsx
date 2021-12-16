import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow,
    UsersType
} from "../../redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../../common/Preloader";
import {getUsers} from "../../api/Api";


type UsersAPITypeProps = {
    users: UsersType[]
    follow: (userId: number) => void
    setCurrentPage: (currentPage: number) => void
    setUsers: (users: UsersType[]) => void
    setTotalUsersCount: (totalUserCount: number) => void
    toggleIsFetching: (isFetch: boolean) => void
    unfollow: (userId: number) => void
    totalCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
}

type MSTP = {
    users: UsersType[]
    totalCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean

}

type MDTP = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalUserCount: number) => void
    toggleIsFetching: (isFetch: boolean) => void
}

export class UsersAPIComponent extends React.Component<UsersAPITypeProps> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}
        // &count{this.props.pageSize}`,{
        //     withCredentials:true
        // })
        getUsers(this.props.currentPage, this.props.pageSize)
            .then(res => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(res.data.items)
                this.props.setTotalUsersCount(res.data.totalCount)
            })
    }

    onPageChange = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}
        // &count=${this.props.pageSize}`,{
        //     withCredentials:true
        // })
        getUsers(pageNumber, this.props.pageSize).then(res => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(res.data.items)
        })
    }

    render() {
        return <>
            <div>
                {this.props.isFetching ? <Preloader/> : null}
            </div>
            <Users onPageChange={this.onPageChange}
                   currentPage={this.props.currentPage}
                   pageSize={this.props.pageSize}
                   totalCount={this.props.totalCount}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   users={this.props.users}
            />
        </>
    }
}


let mapStateToProps = (state: AppStateType): MSTP => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching

    }
}
// let mapDispatchToProps = (dispatch: Dispatch) => {
//     return {
//         follow: (userId: number) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId: number) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users: UsersType[]) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber: number) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount: number) => {
//             dispatch(setTotalCountAC(totalCount))
//         },
//         toggleIsFitch: (isFetching: boolean) => {
//             dispatch(toggleISFetchAC(isFetching))
//         }
//     }
// }

export const UsersContainer = connect<MSTP, MDTP, {}, AppStateType>(mapStateToProps,
    {
        follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching
    })(UsersAPIComponent)