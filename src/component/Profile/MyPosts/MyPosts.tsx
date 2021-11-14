import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostTypeProps} from "../../../redux/state";
//
// export type PostType = {
//     id: number
//     message: string
//     likesCounts: number
// }
// type PostTypeProps = {
//     posts: PostType[]
// }
export const MyPosts = (props: PostTypeProps) => {

    let postElements = props.posts.map((p) => <Post messages={p.message} likesCounts={p.likesCounts}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea>

                </textarea></div>
                <div>
                    <button> Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>

    )
}
