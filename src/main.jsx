import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './lib/css/bootstrap.css';
import './lib/css/index.css';
import { RouterProvider } from 'react-router-dom';
import router from './providers/router.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
