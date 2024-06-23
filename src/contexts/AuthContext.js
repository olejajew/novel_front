import React, {createContext, useContext, useState} from "react";
import {auth} from "../services/api";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));

    const login = async (username, password) => {
        const user = await auth(username, password)
        localStorage.setItem("token", user.id)
        setIsAuthenticated(true)
        return true
    }
    const logout = () => {
        localStorage.removeItem("token")
        setIsAuthenticated(false)
    }

    return (
        <AuthContext.Provider value={{isAuthenticated, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);