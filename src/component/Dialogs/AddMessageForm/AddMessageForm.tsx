import {useFormik} from "formik";
import React from "react";

type AddMessageFormType = {
    sendMessage: (newMessage: string) => void
}

export const AddMessageForm = (props: AddMessageFormType) => {
    const formik = useFormik({
        initialValues: {
            newMessage: '',
        },
        onSubmit: values => {
            props.sendMessage(values.newMessage)
            formik.resetForm();
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div><textarea placeholder='Enter text'
                           name='newMessage'
                           onChange={formik.handleChange}
                           value={formik.values.newMessage}
            >
            </textarea>
            </div>
            <div>
                <button type={'submit'}>
                  Add Message
                </button>
            </div>
        </form>
    )
}