import React, {Children, useReducer} from "react";

export default(reducer, actions,initialState)=>{

    const Context = React.createContext();
    const Provider =({children})=>{
        const [state, dispatch] = useReducer(reducer, initialState);
        console.log("state in provider" + JSON.stringify(state));
        const boundActions = {};

        for(let key in actions){
            boundActions[key]= actions[key](dispatch);
        }
        console.log(Children);
        return(
        <Context.Provider value ={{state, ...boundActions}}>
            {children}
        </Context.Provider>);
    }
    console.log("provider in create context" + Provider);
    return {Context, Provider};

}