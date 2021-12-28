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
        this.setState(
            {editMode: true})
    }

    deActivateEditMode = () => {
        this.setState(
            {editMode: false})
        this.props.updateStatusTC(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState(
            {status: e.currentTarget.value})
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusTypeProps>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.status !== this.props.status){
            this.setState(
                {status: this.props.status})
        }

        console.log('componentDidUpdate')
    }

    render() {
        console.log('render')
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