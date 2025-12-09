import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../../pages/public/ErrorPage";
import Signin from "../../pages/auth/Signin";
import Notice from "../../pages/public/Notice";
import Contact from "../../pages/public/Contact";
import Faculties from "../../pages/public/Faculties";
import AdminRoutes from "./AdminRoutes";
import TeacherRoutes from "./TeacherRoutes";
import StudentRoutes from "./StudentRoutes";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />} errorElement={<ErrorPage />}>

            {/* public routes */}
            <Route path="/signin" element={<Signin />} />
            <Route path="/notice" element={<Notice />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faculties" element={<Faculties />} />


            {/* Admin routes */}
            {AdminRoutes}

            {/* Teacher routes */}
            {TeacherRoutes}

            {/* Student routes */}
            {StudentRoutes}
        </Route>
    )
)
export default router;
