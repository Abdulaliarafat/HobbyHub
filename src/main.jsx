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
import SuccessStoryDetail from './Components/SuccessStoryDetail.jsx';
import DeshboardLayout from './Layout/DeshboardLayout.jsx';
import DeshallGroup from './DeshBoard/DeshallGroup.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    ErrorBoundary: Error,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch('http://localhost:3000/group/latest'),
        HydrateFallback: Loading
      },
      {
        path: '/story/:id',
        loader: async ({ params }) => {
          const res = await fetch('/SuccessStory.json');
          const data = await res.json();
          return data.find(story => story.id === Number(params.id)); // ← match by ID
        },
        element: <SuccessStoryDetail />
      }
      ,
      {
        path: '/createGroup',
        element: <PrivateRouter>
          <CreateGroup></CreateGroup>
        </PrivateRouter>,
      },
      {
        path: '/allGroup',
        Component: AllGroup,
        // loader: () => fetch('http://localhost:3000/group/all'),
        // HydrateFallback: Loading
      },
      {
        path: '/groupLayout/:id',
        element: <PrivateRouter>
          <GroupLayout></GroupLayout>
        </PrivateRouter>,
        loader: ({ params }) => fetch(`http://localhost:3000/group/id/${params.id}`),
        HydrateFallback: Loading
      },
      {
        path: "/myGroup/:email",
        loader: ({ params }) => fetch(`http://localhost:3000/group/email/${params.email}`),
        element: <PrivateRouter>
          <MyGroup></MyGroup>
        </PrivateRouter>,
        HydrateFallback: Loading,
      },
      {
        path: '/updateGroup/:id',
        loader: ({ params }) => fetch(`http://localhost:3000/group/id/${params.id}`),
        Component: UpdateGroup,
        HydrateFallback: Loading
      },
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
  {
    path:'/deshboard',
    element:<PrivateRouter><DeshboardLayout></DeshboardLayout></PrivateRouter>,
    children:[
    
      {
        path: '/deshboard/DeshallGroup',
        Component: DeshallGroup,
        // loader: () => fetch('http://localhost:3000/group/all'),
        HydrateFallback: Loading
      },
      {
        path: '/deshboard/create',
        Component: CreateGroup,
       
      },
      {
        path: '/deshboard/mygroup/:email',
         loader: ({ params }) => fetch(`http://localhost:3000/group/email/${params.email}`),
        element: <PrivateRouter>
          <MyGroup></MyGroup>
        </PrivateRouter>,
        HydrateFallback: Loading,
       
      }
    ]
  }

]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
