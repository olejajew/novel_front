import React from "react";
import {useAuth} from "../../contexts/AuthContext";
import {useNavigate} from "react-router-dom";
import AuthForm from "../components/AuthForm";

function Auth() {
    const {login} = useAuth();
    const navigate = useNavigate();

    const handleLogin = ({username, password}) => {
        const result = login(username, password);
        if (result) navigate("/home");
    }

    return (
        <div>
            <AuthForm onSubmit={handleLogin}/>
        </div>
    );
}

export default Auth;