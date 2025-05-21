import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './Routes/Root.jsx';
import Error from './Page/Error.jsx';
import Home from './Page/Home.jsx';
import AuthLayout from './Layout/AuthLayout.jsx';
import Login from './Page/Login.jsx';
import Register from './Page/Register.jsx';
import AuthProvider from './Authentication/AuthProvider.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
      { index: true, Component: Home },
      {

      }
    ]
  },
  {
    path: '/authlayout',
    Component: AuthLayout,
    children: [
      {
        path: '/authlayout/login',
        Component: Login
      },
      {
        path:'/authlayout/register',
        Component:Register
      }
    ]
  },

]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
