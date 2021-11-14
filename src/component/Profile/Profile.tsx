import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../redux/state";

type ProfileTypeProps = {
    posts:PostType[]
}

export const Profile = (props:ProfileTypeProps) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts  posts={props.posts}/>
        </div>


    )
}
