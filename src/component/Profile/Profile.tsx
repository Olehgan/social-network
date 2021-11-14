import React from 'react';
import {MyPosts, PostsType} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

type ProfileTypeProps = {
    posts: PostsType[]
}

export const Profile = (props:ProfileTypeProps) => {
    let posts : PostsType[] = [
        {id:1, message:'Hi my friend' , likesCounts:20},
        {id:2, message:'How are you', likesCounts:15},
    ]
    return (
        <div>
            <ProfileInfo/>
            <MyPosts  posts={props.posts}/>
        </div>


    )
}
