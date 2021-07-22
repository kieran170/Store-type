import React, { createContext, useReducer } from 'react';
import { State, Action } from '../types/contextTypes';

export const UserContext = createContext<{ state: State, dispatch: React.Dispatch<any> } | null>(null)

const initialState: State = {
    basket: {
    },
    selectedPage: null,
    total: 0,
}

const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: {
                    ...state.basket,
                    [action.key]: action.payload
                },
            }
        case 'ADD_TO_TOTAL':
            return {
                ...state,
                total: action.number + state.total
            }
        case 'SET_PAGE': 
            return {
                ...state,
                selectedPage: action.page
            }
        default:
            return state
    }
}


export const UserContextProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = { state, dispatch }
    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )
}

