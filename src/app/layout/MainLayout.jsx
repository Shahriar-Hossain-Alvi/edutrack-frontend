import { Outlet } from "react-router-dom";
import Navbar from "../../components/ui/Navbar";


const MainLayout = () => {
    return (
        <div className="">
            <Navbar />
            <div className="container mx-auto">
                <Outlet />
            </div>
            {/* TODO: Footer here */}
        </div>
    );
};

export default MainLayout;