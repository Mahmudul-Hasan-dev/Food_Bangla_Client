import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";

import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import router from './routes/Routes.jsx';
import AuthProviders from './providers/AuthProviders.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders> <RouterProvider router={router} /></AuthProviders>
  </React.StrictMode>,
)
