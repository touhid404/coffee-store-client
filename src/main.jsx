import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './root/MainLayout.jsx';
import Home from './components/Home.jsx';
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffe from './components/UpdateCoffee.jsx';
import CoffeeDetail from './components/CoffeeDetail.jsx';
import SignIn from './components/SignIn.jsx';
import SignUp from './components/SignUp.jsx';
import AuthProvider from './Contexts/AuthProvider.jsx';
import Users from './components/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: ()=> fetch('https://coffee-store-server-cyan-eta.vercel.app/coffees'),
        Component: Home
      },
      {
        path: 'addcoffee',
        Component: AddCoffee
      },
      {
        path: 'coffeeDetail/:id',
        loader: ({params})=> fetch(`https://coffee-store-server-cyan-eta.vercel.app/coffees/${params.id}`),
        Component: CoffeeDetail
      },
      {
        path: 'updateCoffee/:id',
        loader: ({params})=> fetch(`https://coffee-store-server-cyan-eta.vercel.app/coffees/${params.id}`),

        Component: UpdateCoffe
      },{
        path: 'signin',
        Component: SignIn
      },
      {
        path: 'signup',
        Component: SignUp
      },
      {
        path : 'users',
        loader: ()=> fetch('https://coffee-store-server-cyan-eta.vercel.app/users'),
        Component: Users
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
