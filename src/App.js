import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Main from "./ui/pages/Main";
import Auth from './ui/pages/Auth';
import Home from './ui/pages/Home';
import Novel from './ui/pages/Novel';
import ProtectedRoute from "./ui/components/ProtectedRoute";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/auth" element={<Auth/>}/>
            <Route path="/home" element={<ProtectedRoute element={<Home/>}/>}/>
            <Route path="/novel/:id" element={<ProtectedRoute element={<Novel/>}/>}/>
        </Routes>
    );
}

export default App;