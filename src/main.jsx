import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Header from './Header.jsx';
import Users from './Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div><Header /><App /></div>,
  },
  {
    path: "/users",
    element: <div><Header /><Users /></div>,
    loader: () => fetch('http://localhost:5000/users'),
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
