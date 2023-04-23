import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main> </Main>,
        children: [
            {
                path:'/',
                element: <Home> </Home>

            },

            {
               path:'/category/:id',
               element: <Category> </Category>,

            },
        ]
    },
])



export default router;