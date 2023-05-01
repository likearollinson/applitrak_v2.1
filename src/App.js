import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import Signup from './pages/Signup';

// import Header from './components/Header';

function App() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='login' element={<Login />} />
            <Route path='profile' element={<Profile />} />
            <Route path='signup' element={<Signup />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
}

export default App;
