import { createContext, useContext, useReducer } from "react";

// Define initial state
const initialState = {
    user: null,
    role: null,
    token: null
};

// Create context
export const AuthContext = createContext(initialState);

// Define reducer function
const authReducer = (state, action) => {
    switch(action.type) {
        case 'LOGIN_SUCCESS':
            return {
                user: action.payload.user,
                role: action.payload.role,
                token: action.payload.token
            };
        case 'LOGIN_START':
        case 'LOGOUT':
            return initialState;
        default:
            return state;
    }
};

// Create provider component
export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};
