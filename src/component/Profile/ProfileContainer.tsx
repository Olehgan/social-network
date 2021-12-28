import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Profile} from "./Profile";
import {
    getStatusTC,
    getUsersProfileTC,
    ProfileType,
    setStatus,
    setUserProfile,
    updateStatusTC
} from "../../redux/profile-reducer";
import {toggleIsFetching} from "../../redux/users-reducer";
import {withParams} from "../../hoc/whithParams";

type MSTP = {
    profile: ProfileType
    userId?: string
    status: string
    // isAuth:boolean
}
type MDTP = {
    setUserProfile: (profile: ProfileType) => void
    toggleIsFetching: (isFetch: boolean) => void
    getUsersProfileTC: (userId: string) => void,
    getStatusTC: (userId: string) => void,
    setStatus: (status: string) => void,
    updateStatusTC: (status: string) => void

}
type ProfileComponentTypeProps = MSTP & MDTP

export class ProfileComponent extends React.Component<ProfileComponentTypeProps> {

    componentDidMount() {
        let userId = this.props.userId
        if (!userId) {
            userId = '20829'
        }
        this.props.getUsersProfileTC(userId)
        this.props.getStatusTC(userId)

    }

    render() {
        // if(!this.props.isAuth)return <Navigate to={'/login'}/>
        return (
            <div>
                <Profile {...this.props}
                         profile={this.props.profile}
                         status={this.props.status}
                         updateStatusTC={this.props.updateStatusTC}/>
            </div>
        )
    }

}

// let withAuthNavigateContainer = withAuthNavigate(ProfileComponent)

let mapStateToProps = (state: AppStateType) => {

    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
        // isAuth:state.authMe.isAuth
    }
}


export const ProfileContainer = connect<MSTP, MDTP, {}, AppStateType>(mapStateToProps, {
    setUserProfile,
    toggleIsFetching,
    setStatus,
    getUsersProfileTC,
    getStatusTC,
    updateStatusTC
})(withParams(ProfileComponent))
// export const ProfileContainer = compose<React.ComponentType>(
//     withAuthNavigate,
//     withParams,
//     connect<MSTP, MDTP, {}, AppStateType>(mapStateToProps, {
//         setUserProfile,
//         toggleIsFetching,
//         getUsersProfileTC,
//     })
//     (ProfileComponent))
