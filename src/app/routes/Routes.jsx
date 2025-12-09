import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../../pages/public/ErrorPage";
import Signin from "../../pages/auth/Signin";
import Notice from "../../pages/public/Notice";
import Contact from "../../pages/public/Contact";
import Faculties from "../../pages/public/Faculties";
import AdminLayout from "../layout/AdminLayout";
import AdminDashboard from "../../pages/admin/AdminDashboard";
import TeacherLayout from "../layout/TeacherLayout";
import TeacherDashboard from "../../pages/teacher/TeacherDashboard"

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/signin',
                element: <Signin />
            },
            {
                path: '/notice',
                element: <Notice />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/faculties',
                element: <Faculties />
            },

            // Admin routes
            {
                path: "/admin",
                element: <AdminLayout />,
                children: [
                    {
                        path: "/admin/dashboard",
                        element: <AdminDashboard />
                    }
                ]
            },

            // Teacher routes
            {
                path: "/teacher",
                element: <TeacherLayout />,
                children: [
                    {
                        path: "dashboard",
                        element: <TeacherDashboard />
                    }
                ]
            }
        ]
    }
])

export default router;