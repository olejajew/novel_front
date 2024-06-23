import React, {useState} from "react";
import {Button, Input} from "antd";

function AuthForm({onSubmit}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleLoginChange = (event) => {
        setUsername(event.target.value);
    }

    const handleSubmit = () => {
        onSubmit({username, password});
    }

    return (
        <div>
            <Input onChange={handleLoginChange} placeholder="Login"/>
            <Input.Password onChange={handlePasswordChange} placeholder="Password"/>
            <Button type="primary" onClick={handleSubmit}>Login</Button>
        </div>
    );
}

export default AuthForm;