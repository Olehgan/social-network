import React from "react";
import {AddMessageForm} from "./AddMessageForm";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {sendMessage} from "../../../redux/dialogs-reducer";


type MSTP = {}

type MDTP = {
    sendMessage: (newMessage: string) => void
}

export type AddMessageFormComponentType = MSTP & MDTP

class AddMessageFormComponent extends React.Component<AddMessageFormComponentType> {
    render() {
        return (
            <div>
                <AddMessageForm sendMessage={this.props.sendMessage}/>
            </div>
        )
    }
}

let mapSteToProps = (state: AppStateType): MSTP => {
    return {}
}

export const AddMessageFormContainer = connect<MSTP, MDTP, {}, AppStateType>(mapSteToProps,
    {sendMessage})(AddMessageFormComponent)