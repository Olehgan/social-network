import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Profile} from "./Profile";
import {getUsersProfileTC, ProfileType, setUserProfile} from "../../redux/profile-reducer";
import {toggleIsFetching} from "../../redux/users-reducer";
import {withParams} from "./ProfileInfo/whithParams/whithParams";
import { Navigate } from 'react-router-dom';

//
// export function withParams<T>(Component: ComponentType<T>) {
//     return (props: T) => {
//         const {userId} = useParams();
//
//         return (
//             <Component
//                 userId={userId}
//                 {...props}
//             />
//         );
//     };
// };
//
//
// type ProfileTypeProps = {
//     userId?: string
//     profile: ProfileType
//     toggleIsFetching: (isFetch: boolean) => void
//     setUserProfile: (profile: ProfileType) => void


type MSTP = {
    profile: ProfileType
    userId?: string
    isAuth:boolean


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
        // this.props.toggleIsFetching(true)
        // userAPI.getUserProfile(userId).then(res => {
        //     this.props.setUserProfile(res.data)
        // })
    }

    render() {
        if(!this.props.isAuth)return <Navigate to={'/login'}/>
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }

}

let mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile,
        isAuth:state.authMe.isAuth
    }
}

export const ProfileContainer = connect<MSTP, MDTP, {}, AppStateType>(mapStateToProps, {
    setUserProfile,
    toggleIsFetching,
    getUsersProfileTC
})(withParams(ProfileComponent))
