import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
              <textarea></textarea>
                <button> Add post</button>
            </div>
            <div className={s.posts}>
            <Post  messages='Hi my friend' likesCounts= {20}/>
            <Post  messages='Hi my brother' likesCounts= {15}/>
            </div>
        </div>

    )
}
