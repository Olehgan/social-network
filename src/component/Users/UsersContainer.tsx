import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    follow,
    followTC,
    getUsersTC,
    setCurrentPage,
    setToggleFollowingProgress,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow,
    unfollowTC,
    UsersType
} from "../../redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../../common/Preloader";
import {Navigate} from "react-router-dom";
import {withAuthNavigate} from "../../hoc/withAuthNavigate";

//
// export type UsersAPIType = {
//     users: UsersType[]
//     follow: (userId: number) => void
//     setCurrentPage: (currentPage: number) => void
//     setUsers: (users: UsersType[]) => void
//     setTotalUsersCount: (totalUserCount: number) => void
//     toggleIsFetching: (isFetch: boolean) => void
//     unfollow: (userId: number) => void
//     totalCount: number
//     pageSize: number
//     currentPage: number
//     isFetching: boolean
// }

type MSTP = {
    users: UsersType[]
    totalCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
    isAuth:boolean
}

type MDTP = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalUserCount: number) => void
    toggleIsFetching: (isFetch: boolean) => void
    setToggleFollowingProgress: (isFetch: boolean, userId: number) => void
    getUsersTC: (currentPage: number, pageSize: number) => void
    followTC: (id: number) => void
    unfollowTC: (id: number) => void
}
export type UsersAPITypeProps = MDTP & MSTP

export class UsersAPIComponent extends React.Component<UsersAPITypeProps> {

    componentDidMount() {
        debugger
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
        // this.props.toggleIsFetching(true)
        // // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}
        // // &count{this.props.pageSize}`,{
        // //     withCredentials:true
        // // })
        // userAPI.getUsers(this.props.currentPage, this.props.pageSize)
        //     .then(res => {
        //         this.props.toggleIsFetching(false)
        //         this.props.setUsers(res.data.items)
        //         this.props.setTotalUsersCount(res.data.totalCount)
        //     })
    }

    onPageChange = (pageNumber: number) => {
        debugger
        this.props.getUsersTC(pageNumber, this.props.pageSize)
        // this.props.toggleIsFetching(true)
        // this.props.setCurrentPage(pageNumber)
        // // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}
        // // &count=${this.props.pageSize}`,{
        // //     withCredentials:true
        // // })
        // userAPI.getUsers(pageNumber, this.props.pageSize).then(res => {
        //     this.props.toggleIsFetching(false)
        //     this.props.setUsers(res.data.items)
        // })
    }

    render() {
        if(!this.props.isAuth)return <Navigate to={'/login'}/>
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
                   setToggleFollowingProgress={this.props.setToggleFollowingProgress}
                   followingInProgress={this.props.followingInProgress}
                   isFetching={this.props.isFetching}
                   followTC={this.props.followTC}
                   unfollowTC={this.props.unfollowTC}

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
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        isAuth:state.authMe.isAuth
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
        follow, unfollow, setUsers,
        setCurrentPage, setTotalUsersCount, toggleIsFetching,
        setToggleFollowingProgress, getUsersTC, followTC, unfollowTC
    })(withAuthNavigate(UsersAPIComponent))