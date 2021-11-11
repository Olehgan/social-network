import React from "react";
import s from './Dialogs.module.css'

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.dialog +' '+ s.active}>
                    Oleg
                </div>
                <div className={s.dialog}>
                    Dimas
                </div>
                <div className={s.dialog}>
                    Any
                </div>
                <div className={s.dialog}>
                    Ilia
                </div>
            </div>
                <div className={s.messages}>
                    <div className={s.message}>
                        How are you?
                    </div>
                    <div className={s.message}>
                        Hello!!!!
                    </div>
                    <div className={s.message}>
                        Hi!!
                    </div>
                </div>


        </div>
    )
}
