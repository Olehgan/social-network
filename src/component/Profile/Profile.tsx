import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostContainer} from "./MyPosts/MyPostContainer";
import {ProfileType} from "../../redux/profile-reducer";


type ProfileTypeProps = {
  profile:ProfileType
}

export const Profile = (props:ProfileTypeProps) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} />
            <MyPostContainer/>
        </div>
    )
}
