import React from "react";
import preloader from "../assests/images/preloader.gif";

type PreloaderPropsType = {}

export let Preloader = (props: PreloaderPropsType) => {
    return <div>
        <img src={preloader} alt={''}/>
    </div>

}