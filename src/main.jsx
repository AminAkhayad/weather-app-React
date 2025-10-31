import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import "@style/reset.css";
import "@style/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "@functional/App/App";
import Home from '@pages/Home/Home';
import Category from '@pages/Category/Category';
import Search from '@pages/Search/Search';
import Login from '@pages/Login/Login';
import Register from '@pages/Register/Register';
import Article from '@pages/Article/Article';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthenticationProvider from './app/components/functional/Auth/AuthenticationProvider';

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children:[ {
      path: '/',
      element: <Home />,
  
      },{
        path: '/categories/:slug',
        element: <Category />,
      }, {
        path: '/news/:slug',  
        element: <Article />,
      },{
        path: '/search',
        element: <Search />,
      }, {
        path:'/login',
        element:<Login />
      }, {
        path:'/register',
        element:<Register />

      }, {
        path: "news/:slug", 
        
      }
      
    ]
  }

]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthenticationProvider>
    <RouterProvider router={router} />
    </AuthenticationProvider>
    </QueryClientProvider>
  </StrictMode>,
)
