import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { AuthProvider } from './Utils/AuthSession'
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <AuthProvider>
            <App></App>
        </AuthProvider>
    </React.StrictMode>
);