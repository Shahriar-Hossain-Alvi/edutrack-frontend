import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth.jsx";

const Unauthorize = () => {
    return (
        <div className="mt-20 min-h-screen flex justify-center items-center">
            <div className="text-center">
                <h1 className="text-2xl text-error mb-3">⚠️ Unauthorized Access!!</h1>

                <Link to="/" className="btn btn-success mr-5">Home</Link>

                <Link to="/signin" className="btn btn-error">SignIn</Link>
            </div>
        </div>
    );
};

export default Unauthorize;