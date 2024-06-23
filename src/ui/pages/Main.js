import React, {useEffect} from "react";
import {Button} from "antd";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../contexts/AuthContext";

function Main() {
    const navigate = useNavigate();
    const navigateToAuth = () => {
        navigate('/auth')
    }

    const {isAuthenticated} = useAuth();

    useEffect(() => {
        console.log("Auth useEffect: " + isAuthenticated);
        if (isAuthenticated) navigate("/home")
    }, [isAuthenticated, navigate]);

    return (
        <div>
            <h1>Main</h1>
            <Button type="primary" onClick={navigateToAuth}>Logout</Button>
        </div>
    );
}

export default Main;