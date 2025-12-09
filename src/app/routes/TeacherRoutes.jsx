import { Route } from 'react-router-dom';
import TeacherLayout from '../layout/TeacherLayout';
import TeacherDashboard from '../../pages/teacher/TeacherDashboard';

const TeacherRoutes = (
    <Route path="/teacher" element={<TeacherLayout />}>
        <Route index element={<TeacherDashboard />} />
    </Route>
)

export default TeacherRoutes;