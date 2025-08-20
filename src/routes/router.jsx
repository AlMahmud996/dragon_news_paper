import { createBrowserRouter} from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../components/pages/CategoryNews";
import Home from "../components/pages/Home";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";
import AuthLayout from "../layouts/AuthLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children:[
            {
                path: "",
                element: <Home></Home>,
            },
            {
                path: "/category/:id",
                element: <CategoryNews></CategoryNews>,
                loader: ()=> fetch("/news.json"),
            },
        ],
    },
    {
        path: "/news",
        element: <h2>News Layout</h2>
    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>
            },
            {
                path: "/auth/register",
                element: <Register></Register>
            }
        ]
    },
    {
        path: "/*",
        element: <h2>Error 404</h2>
    },
]);

export default router;