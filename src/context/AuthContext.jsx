import { createContext, useContext, useReducer } from "react";
const initialState = {
    user: null,
    role: null,
    token: null
};
export const AuthContext = createContext(initialState);
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
export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};