import { Outlet } from "react-router-dom";
import Navbar from "../../components/ui/Navbar";


const MainLayout = () => {
    return (
        <div className="font-noto-sans">
            <Navbar />
            <div>
                <Outlet />
            </div>
            {/* TODO: Footer here */}
        </div>
    );
};

export default MainLayout;