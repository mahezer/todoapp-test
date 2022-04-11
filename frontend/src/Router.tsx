import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Register from './Auth/Register/Register'
import Login from './Auth/Login/Login'
import ProjectIndex from './Projects';

function App() {
    return (
        <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<ProjectIndex />} />
        </Routes>
    );
}

export default App;
