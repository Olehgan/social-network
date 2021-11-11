import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
//
// export type PostsTypeProps = {
//     id:number
//     message:string
//     likesCounts : number
// }

export const MyPosts = (props:any) => {
    let posts = [
        {id:1, message:'Hi my friend' , likesCounts:20},
        {id:2, message:'How are you', likesCounts:15},
    ]

    let postElements = posts.map((p)=><Post   messages={p.message} likesCounts= {p.likesCounts}/> )


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
