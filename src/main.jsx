import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './components/Layout/Layout.jsx'
import Home from './components/Home/Home.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('shirts.json')
      },
      {
        path: '/order',
        element: <h1>Order Page</h1>
      },
      {
        path: '/about',
        element: <h1>About Page</h1>
      },
      {
        path: '/contact',
        element: <h1>Contact Page</h1>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
