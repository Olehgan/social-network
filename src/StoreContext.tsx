import React from "react";
import store, {StoreType} from "./redux/store";


const StoreContext = React.createContext<StoreType>(store);

export const Provider = (props:any) => {
    return <StoreContext.Provider value={store}>
        {props.children}
    </StoreContext.Provider>
}

export default StoreContext;
