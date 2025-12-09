import { Route } from "react-router-dom";
import AdminDashboard from "../../pages/admin/AdminDashboard";
import AdminLayout from "../layout/AdminLayout";


const AdminRoutes = (
    <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
    </Route>
)

export default AdminRoutes;