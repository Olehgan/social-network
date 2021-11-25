import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {AppStateType} from "../../../redux/redux-store";
import {PostType, PostTypeProps} from "../../../redux/profile-reducer";


type MyPostsTypeProps = {
    // newPostText:string
    // posts: PostType[]
    profilePage:PostTypeProps
    addPost: () => void
    onNewPostTextChange: (newPostText: string) => void
}

export const MyPosts = (props: MyPostsTypeProps) => {
    let state = props.profilePage

    let postElements = state.posts.map((p) => <Post messages={p.message}
                                                                      likesCounts={p.likesCounts}/>)

    let addPostHandler = () => {
        props.addPost()
    }
    let onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;
        props.onNewPostTextChange(text)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea value={state.newPostText} onChange={onChangeHandler}>
                </textarea></div>
                <div>
                    <button onClick={addPostHandler}> Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>

    )
}
