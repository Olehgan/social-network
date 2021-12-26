import React from "react";

  type ProfileStatusTypeProps = {
    status:string
}


export class ProfileStatus extends React.Component<ProfileStatusTypeProps> {

    state = {
        editMode: false,
        title: "Hello"
    }

    activateMode() {
        this.setState(
            {editMode: true})
    }

    deActivateEditMode() {
        this.setState(
            {editMode: false})
    }

    render() {

        return <div>
            {!this.state.editMode ?
                <div>
                    <span onDoubleClick={this.activateMode.bind(this)}>{this.props.status}</span>
                </div>
                : <div>
                    <input autoFocus={true} onBlur={this.deActivateEditMode.bind(this)} value={this.props.status}/>
                </div>
            }

        </div>
    }
}