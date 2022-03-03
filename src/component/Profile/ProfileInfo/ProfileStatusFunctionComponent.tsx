import React, {ChangeEvent, useEffect, useState} from "react";

type ProfileStatusTypeProps = {
    status: string
    updateStatusTC: (status: string) => void
}


export const ProfileStatus = (props: ProfileStatusTypeProps) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        console.log("useEffect")
        setStatus(props.status)
    }, [props.status])

    let activateEditMode = () => {
        setEditMode(true)
    }

    let deActivateEditMode = () => {
        setEditMode(false)
        props.updateStatusTC(status)
    }
    let onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)

    }
console.log("render ProfileStatus  ")
    return (
        <div>
        {!editMode
            ? <div>
                <span onDoubleClick={activateEditMode}>{props.status || "----"}</span>
            </div>
            : <div>
                <input autoFocus={true} onBlur={deActivateEditMode} onChange={onStatusChange}
                       value={status}/>
            </div>
        }

    </div>
    )
}