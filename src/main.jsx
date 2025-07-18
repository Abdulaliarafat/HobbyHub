import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './Routes/Root.jsx';
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
import Error from './Page/Error.jsx';
import DashMyGroup from './DeshBoard/DashMyGroup.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement:<Error></Error>,
    HydrateFallback:Loading,
    children: [
      {
        index: true,
        Component: Home,
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
        // loader: () => fetch('https://y-flame-eight-20.vercel.app/group/all'),
        // HydrateFallback: Loading
      },
      {
        path: '/groupLayout/:id',
        element: <PrivateRouter>
          <GroupLayout></GroupLayout>
        </PrivateRouter>,
        loader: ({ params }) => fetch(`https://y-flame-eight-20.vercel.app/group/id/${params.id}`),
        HydrateFallback: Loading
      },
      {
        path: "/myGroup/:email",
        loader: ({ params }) => fetch(`https://y-flame-eight-20.vercel.app/group/email/${params.email}`),
        element: <PrivateRouter>
          <MyGroup></MyGroup>
        </PrivateRouter>,
        HydrateFallback: Loading,
      },
      {
        path: '/updateGroup/:id',
        loader: ({ params }) => fetch(`https://y-flame-eight-20.vercel.app/group/id/${params.id}`),
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
    path: '/deshboard',
    element: <PrivateRouter>
      <DeshboardLayout></DeshboardLayout>
    </PrivateRouter>,
    errorElement:<Error></Error>,
    HydrateFallback: Loading,
    children: [
      {
        path: '/deshboard/DeshallGroup',
        Component: DeshallGroup,
        // loader: () => fetch('https://y-flame-eight-20.vercel.app/group/all'),
        HydrateFallback: Loading
      },
      {
        path: '/deshboard/create',
        Component: CreateGroup,
        hydrateFallbackElement: <Loading></Loading>

      },
      {
        path: '/deshboard/mygroup/:email',
        loader: ({ params }) => fetch(`https://y-flame-eight-20.vercel.app/group/email/${params.email}`),
        element: <PrivateRouter>
         <DashMyGroup></DashMyGroup>
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
