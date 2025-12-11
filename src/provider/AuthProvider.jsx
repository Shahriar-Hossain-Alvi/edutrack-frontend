import { createContext, useState } from 'react';



export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); // set user
    const [loading, setLoading] = useState(true); // for loading spinner
    const [roleVerified, setRoleVerified] = useState(null);


    // fetch user after login
    const fetchUser = async (axiosSecure) => {
        const res = await axiosSecure.get('/users/me');
        console.log(res.data);
        setUser(res.data);
    }


    // logout user 
    const logout = () => {
        return '';
    }

    // save user to local storage

    const authInfo = {
        logout,
        setLoading,
        loading,
        user,
        setUser,
        fetchUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;