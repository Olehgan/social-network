import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostType,} from "../../../redux/state";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";


type MyPostsTypeProps = {
    posts: PostType[]
    newPostText: string
    dispatch: (action: any) => void
}

export const MyPosts = (props: MyPostsTypeProps) => {

    let postElements = props.posts.map((p) => <Post messages={p.message} likesCounts={p.likesCounts}/>)

    let addPost = () => {
        props.dispatch(addPostAC())
    }
    let onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.dispatch(updateNewPostTextAC(text))
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea value={props.newPostText} onChange={onChangeHandler}>
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
