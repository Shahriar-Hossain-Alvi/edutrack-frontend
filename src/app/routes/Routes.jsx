import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../../Pages/public/ErrorPage";
import Signin from "../../Pages/auth/Signin";

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