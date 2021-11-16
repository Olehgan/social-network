import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../redux/state";

type ProfileTypeProps = {
    posts:PostType[],
    addPost:()=>void
    newPostText: string
    updatePostText: (newText: string) => void
}

export const Profile = (props:ProfileTypeProps) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts  posts={props.posts}  addPost={props.addPost}
                      newPostText={props.newPostText} updatePostText={props.updatePostText} />
        </div>


    )
}
