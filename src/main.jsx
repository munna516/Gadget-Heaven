import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Statistics from './Pages/Statistics';
import Dashboard from './Pages/Dashboard';
import Home from './Pages/Home';
import MainLayout from './Layout/MainLayout';
import { element } from 'prop-types';
import AllProducts from './Components/AllProducts';
import Error from './Components/Error';
import Details from './Components/Details';
import AllOffers from './Pages/AllOffers';
import CartList from './Components/CartList';
import Wishlist from './Components/Wishlist';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        children: [
          {
            path: '/',
            element: <AllProducts></AllProducts>,
            loader: () => fetch('../allproducts.json')
          },
          {
            path: '/category/:category',
            element: <AllProducts></AllProducts>,
            loader: () => fetch('../allproducts.json')
          },

        ]
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/details/:title',
        element: <Details></Details>,
        loader: () => fetch('/allproducts.json')
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        loader: () => fetch('/allproducts.json'),
        children: [

          {
            path: '/dashboard',
            element: <CartList></CartList>,
            loader: () => fetch('../allproducts.json'),
          },
          {
            path: '/dashboard/wishlist',
            element: <Wishlist></Wishlist>,
            loader: () => fetch('../allproducts.json'),
          }
        ]
      },
      {
        path: '/alloffers',
        element: <AllOffers></AllOffers>,
        loader: () => fetch('/offers.json')
      }

    ]
  }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
