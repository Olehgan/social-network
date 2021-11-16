import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/state";
//
// export type PostType = {
//     id: number
//     message: string
//     likesCounts: number
// }
type MyPostsTypeProps = {
    posts: PostType[]
    addPost: () => void
    newPostText: string
    updatePostText: (newText: string) => void
}
export const MyPosts = (props: MyPostsTypeProps) => {

    let postElements = props.posts.map((p) => <Post messages={p.message} likesCounts={p.likesCounts}/>)


    let addPost = () => {
        props.addPost();
        // /props.updatePostText("")

    }
    let onChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
        // let text = newPostElement.current.value
        props.updatePostText(e.currentTarget.value)

    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea value={props.newPostText} onChange={onChangeHandler} >
                </textarea></div>
                <div>
                    <button onClick={addPost}> Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>

    )
}
