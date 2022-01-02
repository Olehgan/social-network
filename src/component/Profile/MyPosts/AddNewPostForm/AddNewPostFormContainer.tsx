import React from "react";
import {connect} from "react-redux";
import {addPostAC} from "../../../../redux/profile-reducer";
import {AppStateType} from "../../../../redux/redux-store";
import {AddNewPostForm} from "./AddNewPostForm";


type MSTP = {}

type MDTP = {
    addPost: (newPostText: string) => void
}

export type AddNewPostFormComponentType = MSTP & MDTP

class AddNewPostFormComponent extends React.Component<AddNewPostFormComponentType> {
    render() {
        return (
            <div>
                <AddNewPostForm addPost={this.props.addPost}/>
            </div>
        )
    }
}

let mapSteToProps = (state: AppStateType): MSTP => {
    return {}
}

export const AddMessageFormContainer = connect<MSTP, MDTP, {}, AppStateType>(mapSteToProps,
    {addPost: addPostAC})(AddNewPostFormComponent)