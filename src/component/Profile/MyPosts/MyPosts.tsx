import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    let postsDate = [
        {id:1, message:'Hi my friend' , likesCounts:20},
        {id:2, message:'How are you', likesCounts:15},


    ]

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea></textarea></div>
                <div>
                    <button> Add post</button>
                </div>
            </div>
            <div className={s.posts}>
            <Post   messages={postsDate[0].message} likesCounts= {postsDate[0].likesCounts}/>
            <Post  messages={postsDate[1].message} likesCounts= {postsDate[1].likesCounts}/>
            </div>
        </div>

    )
}
