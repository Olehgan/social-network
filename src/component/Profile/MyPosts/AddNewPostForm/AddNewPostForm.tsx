import {useFormik} from "formik";
import React from "react";

type AddNewPostFormType = {
    addPost: (newPostText: string) =>void
}

export const AddNewPostForm = (props: AddNewPostFormType) => {
    const formik = useFormik({
        initialValues: {
            newPostText: '',
        },
        onSubmit: values => {
            props.addPost(values.newPostText)
            formik.resetForm();
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div><textarea placeholder='Enter post'
                           name='newPostText'
                           onChange={formik.handleChange}
                           value={formik.values.newPostText}
            >
            </textarea>
            </div>
            <div>
                <button type={'submit'}>
                    Add Post
                </button>
            </div>
        </form>
    )
}