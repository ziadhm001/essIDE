import { createContext, useReducer , useEffect } from "react";

export const RecordContext = createContext();

export const recordReducer = (state, action) => {
    switch(action.type) {
        case 'SET_NAME':
            return { name: action.payload };
        default:
            return {state};    
    }
}

export const RecordContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(recordReducer, {
        name: 'default'
    });


    console.log('RecordContext state:', state);

    return(
    <RecordContext.Provider value={{ state,dispatch }}>
        { children }
    </RecordContext.Provider>
)
}

