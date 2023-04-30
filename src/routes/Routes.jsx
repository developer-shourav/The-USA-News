import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/News/News";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivetRoutes from "./PrivetRoutes";

const router = createBrowserRouter([
    {
      path:'/',
      element: <LoginLayout> </LoginLayout>,
      children:[
        {
          path:'/',
          element: <Navigate to='/category/0'> </Navigate>
        },

        {
            path:'/login',
            element:<Login> </Login>

        },

        {
            path:'/register',
            element:<Register> </Register>
        }
      ]

    },

    {
        path:'category',
        element:<Main> </Main>,
        children: [
            {
               path:':id',
               element: <Category> </Category>,
               loader:  ({params}) => fetch(`https://the-usa-news-server-developer-shourav.vercel.app/catagories/${params.id}`)

            },
        ]
    },

    {
        path: '/news',
        element:<NewsLayout> </NewsLayout>,
        children: [
            {
                path:':id',
                element:<PrivetRoutes> <News> </News> </PrivetRoutes>,
                loader: ({params}) => fetch(`https://the-usa-news-server-developer-shourav.vercel.app/news/${params.id}`)
            }
        ]
    }
])



export default router;