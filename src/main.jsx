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
import AuthLayout from './Layout/AuthLayout.jsx';
import Login from './Page/Login.jsx';
import Register from './Page/Register.jsx';
import AuthProvider from './Authentication/AuthProvider.jsx';
import CreateGroup from './Page/CreateGroup.jsx';
import Home from './Page/Home.jsx';
import AllGroup from './Page/AllGroup.jsx';
import MyGroup from './Page/MyGroup.jsx';
import Loading from './Components/Loading.jsx';
import GroupLayout from './Layout/GroupLayout.jsx';
import PrivateRouter from './Authentication/PrivateRouter.jsx';
import UpdateGroup from './Layout/UpdateGroup.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch('https://assignment-server-10-lovat.vercel.app/group'),
        HydrateFallback: Loading
      },
      {
        path: '/createGroup',
        element: <PrivateRouter>
          <CreateGroup></CreateGroup>
        </PrivateRouter>,
      },
      {
        path: '/allGroup',
        Component: AllGroup,
        loader: () => fetch('https://assignment-server-10-lovat.vercel.app/group'),
        HydrateFallback: Loading
      },
      {
        path: '/groupLayout/:id',
        element: <PrivateRouter>
          <GroupLayout></GroupLayout>
        </PrivateRouter>,
        loader: ({ params }) => fetch(`https://assignment-server-10-lovat.vercel.app/group/id/${params.id}`),
        HydrateFallback: Loading
      },
      {
        path: "/myGroup/:email",
        loader: ({ params }) => fetch(`https://assignment-server-10-lovat.vercel.app/group/email/${params.email}`),
        element: <PrivateRouter>
          <MyGroup></MyGroup>
        </PrivateRouter>,
        HydrateFallback: Loading,
      },
      {
        path: '/updateGroup/:id',
        loader: ({ params }) => fetch(`https://assignment-server-10-lovat.vercel.app/group/id/${params.id}`),
        Component: UpdateGroup,
        HydrateFallback: Loading
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
        path: '/authlayout/register',
        Component: Register
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
