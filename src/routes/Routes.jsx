import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/News/News";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main> </Main>,
        children: [
            {
                path:'/',
                element: <Category> </Category>,
                loader: () => fetch('http://localhost:5000/news')

            },

            {
               path:'/category/:id',
               element: <Category> </Category>,
               loader:  ({params}) => fetch(`http://localhost:5000/catagories/${params.id}`)

            },
        ]
    },

    {
        path: '/news',
        element:<NewsLayout> </NewsLayout>,
        children: [
            {
                path:':id',
                element:<News> </News>,
                loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
])



export default router;