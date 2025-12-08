import { Outlet } from "react-router-dom";


const MainLayout = () => {
    return (
        <div className="">
            {/* TODO: Navbar here */}
            <div className="container mx-auto">
                <Outlet />
            </div>
            {/* TODO: Footer here */}
        </div>
    );
};

export default MainLayout;