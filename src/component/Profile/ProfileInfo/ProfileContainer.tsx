import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Profile} from "../Profile";
import {ProfileType, setUserProfile} from "../../../redux/profile-reducer";
import {toggleIsFetching} from "../../../redux/users-reducer";
import {withParams} from "./whithParams/whithParams";
import {userAPI} from "../../../api/Api";
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


type ProfileTypeProps = {
    userId?: string
    profile: ProfileType
    toggleIsFetching: (isFetch: boolean) => void
    setUserProfile: (profile: ProfileType) => void


}
type MSTP = {
    profile: ProfileType

}
type MDTP = {
    setUserProfile: (profile: ProfileType) => void
    toggleIsFetching: (isFetch: boolean) => void

}

export class ProfileComponent extends React.Component<ProfileTypeProps> {

    componentDidMount() {
        let userId = this.props.userId
        if (!userId) {
            userId = '20829'
        }
        // this.props.toggleIsFetching(true)
        userAPI.getUserProfile(userId).then(res => {
            this.props.setUserProfile(res.data)
        })
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }

}

let mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile
    }
}

export const ProfileContainer = connect<MSTP, MDTP, {}, AppStateType>(mapStateToProps, {
    setUserProfile,
    toggleIsFetching
})(withParams(ProfileComponent))
