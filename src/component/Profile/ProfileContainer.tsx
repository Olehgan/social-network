import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Profile} from "./Profile";
import {getUsersProfileTC, ProfileType, setUserProfile} from "../../redux/profile-reducer";
import {toggleIsFetching} from "../../redux/users-reducer";
import {withParams} from "../../hoc/whithParams";
import {withAuthNavigate} from "../../hoc/withAuthNavigate";

type MSTP = {
    profile: ProfileType
    userId?: string
    // isAuth:boolean
}
type MDTP = {
    setUserProfile: (profile: ProfileType) => void
    toggleIsFetching: (isFetch: boolean) => void
    getUsersProfileTC: (userId: string) => void

}
type ProfileComponentTypeProps = MSTP & MDTP

export class ProfileComponent extends React.Component<ProfileComponentTypeProps> {

    componentDidMount() {
        let userId = this.props.userId
        if (!userId) {
            userId = '20829'
        }
        this.props.getUsersProfileTC(userId)
    }

    render() {
        // if(!this.props.isAuth)return <Navigate to={'/login'}/>
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }

}

// let withAuthNavigateContainer = withAuthNavigate(ProfileComponent)

let mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile,
        // isAuth:state.authMe.isAuth
    }
}
//
// export const ProfileContainer = connect<MSTP, MDTP, {}, AppStateType>(mapStateToProps, {
//     setUserProfile,
//     toggleIsFetching,
//     getUsersProfileTC
// })(withParams(ProfileComponent))

export const ProfileContainer = connect<MSTP, MDTP, {}, AppStateType>(mapStateToProps, {
    setUserProfile,
    toggleIsFetching,
    getUsersProfileTC
}) (withAuthNavigate(withParams(ProfileComponent)))
