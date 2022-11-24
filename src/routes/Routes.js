import Category from "../pages/Home/Categories/Category";
import Home from "../pages/Home/Home";
import Login from "../pages/shared/Login/Login";
import SignUp from "../pages/shared/Login/SignUp";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/signup',
                element:<SignUp></SignUp>
            },
            {
                path: '/category/:id',
                element:<Category></Category>,
                loader: async({params})=> await fetch(`http://localhost:5000/category/${params.id}`)
            },
        ]
    }
])

export default router