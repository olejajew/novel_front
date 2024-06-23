import React from "react";
import {useNavigate} from "react-router-dom";

function AuthButton() {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/auth");
    }

    return (
        <button onClick={handleLogin}>Login</button>
    );
}

export default AuthButton;