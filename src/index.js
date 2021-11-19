import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom'
import App from './App';
import UiModeContextProvider from './contexts/UiModeContext';
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <UiModeContextProvider>
                <App />
            </UiModeContextProvider>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
)