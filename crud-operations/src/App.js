import React, { Profiler } from 'react';
import './App.css';
import Task from './Task';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import FetchApi from './FetchApi';
import { PredictAge } from './PredictAge';
import { Excuse } from './Excuse';
import Todo from './Todo';
import { Profile } from './Profile'
import { Navbar } from './Navbar';

export default function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Todo />} />
                    <Route path="/FetchApi" element={<FetchApi />} />
                    <Route path="/PredictAge" element={<PredictAge />} />
                    <Route path="/Excuse" element={<Excuse />} />
                    <Route path="/Profile/:username" element={<Profile />} />
                    <Route path="*" element={<h1>Page not found 404</h1>} />
                </Routes>
            </Router>
        </div>
    )
}