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
import Update from './Update.jsx';

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
  {
    path: '/update/:id',
    element: <div><Header /><Update /></div>,
    loader: ({ params }) => fetch(`http://localhost:5000/users/${params.id}`)
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
