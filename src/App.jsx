/* eslint-disable */
//import React from 'react'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from './uicomps/Home'
import Menu , {loader as menuLoader} from './features/menu/Menu'
import Cart from './features/cart/Cart'
import CreateOrder from './features/order/CreateOrder'
import Order from './features/order/Order'
import AppLayout from './uicomps/AppLayout'
import Error from './uicomps/Error'
import { loader as orderLoader } from './features/order/Order'
import  {action as createOrderAction} from './features/order/CreateOrder'

const router = createBrowserRouter([
  {
    element:<AppLayout/>,
    errorElement: <Error/>,
    
    children:[
      {
        path:'/',
        element: <Home />,
        errorElement : <Error />,
      },
      {
        path:'/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement : <Error />,
      },
      {
        path:'/cart',
        element: <Cart />,

      },
      {
        path:'/order/new',
        element: <CreateOrder />,
        action: createOrderAction,
        // custom action to create the order in the store (this is just a mock, in a real app you'd use a real action creator)
      },
      {
        path:'/order/:orderId',
        element: <Order />,
        loader: orderLoader,

      },
    ]
  },
  
])
export default function App() {
  return (
   <RouterProvider router={router}/>
  )
}
