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
import {withAuthNavigate} from "../../hoc/withAuthNavigate";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUserCount,
    getUsers
} from "../../redux/users-selrctors";

type MSTP = {
    users: UsersType[]
    totalCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
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
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
    }

    onPageChange = (pageNumber: number) => {
        this.props.getUsersTC(pageNumber, this.props.pageSize)
    }

    render() {
        // if (!this.props.isAuth) return <Navigate to={'/login'}/>
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
        users: getUsers(state),
        totalCount: getTotalUserCount(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isFetching:getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}
export const UsersContainer = connect<MSTP, MDTP, {}, AppStateType>(mapStateToProps,
    {
        follow, unfollow, setUsers,
        setCurrentPage, setTotalUsersCount, toggleIsFetching,
        setToggleFollowingProgress, getUsersTC, followTC, unfollowTC
    })(withAuthNavigate(UsersAPIComponent))
// export const UsersContainer = compose<React.ComponentType>(
//     withAuthNavigate,
//     connect<MSTP, MDTP, {}, AppStateType>(mapStateToProps,
//         {
//             follow, unfollow, setUsers,
//             setCurrentPage, setTotalUsersCount, toggleIsFetching,
//             setToggleFollowingProgress, getUsersTC, followTC, unfollowTC
//         }),
//     (UsersAPIComponent))