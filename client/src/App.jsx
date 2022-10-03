import React from 'react';
import './styles/app.scss';
import Toolbar from "./components/Toolbar";
import SettingBar from "./components/SettingBar";
import Canvas from "./components/Canvas";
import {BrowserRouter,Navigate, Route, Routes} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <div className='app'>
                <Routes>
                    <Route path='/:id' element={<><Toolbar/><SettingBar/><Canvas/></>} />
                    <Route path='/' element={<><Toolbar/><SettingBar/><Canvas/><Navigate to={`/f${(+new Date()).toString(16)}`} replace/></>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;