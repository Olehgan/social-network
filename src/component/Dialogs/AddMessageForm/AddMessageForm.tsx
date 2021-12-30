import {useDispatch} from "react-redux";
import {useFormik} from "formik";
import {sendMessage} from "../../../redux/dialogs-reducer";
import React from "react";

type AddMessageFormType = {}

export const AddMessageForm = (props: AddMessageFormType) => {
    let dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            newMessage: '',
        },
        onSubmit: values => {
            dispatch(sendMessage(values.newMessage))
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
                    Send
                </button>
            </div>
        </form>
    )
}