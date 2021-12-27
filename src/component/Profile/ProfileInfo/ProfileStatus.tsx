import React, {ChangeEvent} from "react";

type ProfileStatusTypeProps = {
    status: string
    updateStatusTC: (status: string) => void
}


export class ProfileStatus extends React.Component<ProfileStatusTypeProps> {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        debugger
        this.setState(
            {editMode: true})
    }

    deActivateEditMode = () => {
        debugger
        this.setState(
            {editMode: false})
        this.props.updateStatusTC(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        debugger
        this.setState(
            {status: e.currentTarget.value})
    }

    render() {
debugger
        return <div>
            {!this.state.editMode ?
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || "----"}</span>
                </div>
                : <div>
                    <input autoFocus={true} onBlur={this.deActivateEditMode} onChange={this.onStatusChange}
                           value={this.state.status}/>
                </div>
            }

        </div>
    }
}