import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Signin from "../Pages/Auth/Signin";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <h1>Home</h1>
            },
        ]
    },
    {
        path: '/signin',
        element: <Signin />
    }
])

export default router;