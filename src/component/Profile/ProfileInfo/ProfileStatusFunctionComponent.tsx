import React, {ChangeEvent, useState} from "react";

type ProfileStatusTypeProps = {
    status: string
    updateStatusTC: (status: string) => void
}


export const  ProfileStatus =(props:ProfileStatusTypeProps)=> {

let [editMode,setEditMode] = useState(false)
    let [status, setStatus]=useState(props.status)
 let activateEditMode = () => {
     setEditMode(true)
    }

  let  deActivateEditMode = () => {
      setEditMode(false)
    }
    let onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
        props.updateStatusTC(status)
    }

        return <div>

            {!editMode ?
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || "----"}</span>
                </div>
                : <div>
                    <input autoFocus={true} onBlur={deActivateEditMode} onChange={onStatusChange}
                           value={status}/>
                </div>
            }

        </div>
    }