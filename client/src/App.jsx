import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Products from './Components/Dashboard/Body/Products/Products';
import Explore from './Components/Dashboard/Body/Explore/Explore';
import CreateProduct from './Components/Dashboard/Body/Products/CreateProduct';


import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div><Login/></div>
  },
  {
    path: '/register',
    element: <div><Register/></div>
  },
  {
    path: '/dashboard',
    element: <div><Dashboard/></div>,
    children: [
      {
        path: '/dashboard/products',
        element: <div><Products/></div>,
        children: [
          {
            path: '/dashboard/products/create',
            element: <div><CreateProduct /></div>
          }
        ]
      },
      {
        path: '/dashboard/explore',
        element: <div><Explore/></div>,
      }
    ]
  },
])

function App() {

  return (
    <>
      <div>
        <RouterProvider router={router} />        
      </div>
    </>
  )
}

export default App
