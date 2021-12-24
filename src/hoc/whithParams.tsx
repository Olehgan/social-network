import React, {ComponentType} from "react";
import {useParams} from "react-router-dom";

export function withParams<T>(Component: ComponentType<T>) {
    return (props: T) => {
        const {userId} = useParams();

        return (
            <Component
                userId={userId}
                {...props}
            />
        );
    };
};
