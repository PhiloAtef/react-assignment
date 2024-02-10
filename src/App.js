import './App.css';
import Layout from './Components/Layout';
import {RouterProvider, createBrowserRouter} from 'react-router-dom'



export default function App() {

/*   const routers = createBrowserRouter([{
    
    path: '', element: <Layout/>}
  ])
 */
  return (
    <>
    {/* <RouterProvider router={routers}></RouterProvider> */}
    <Layout/>
    </>
  );
}

