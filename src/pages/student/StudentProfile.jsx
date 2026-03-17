import { useQuery } from "@tanstack/react-query";
import SectionHeader from "../../utils/SectionHeader/SectionHeader.jsx";
import useAxiosSecure from "../../hooks/useAxiosSecure.jsx";
import useAuth from "../../hooks/useAuth.jsx";


const StudentProfile = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: userProfileData, isPending, isError, error } = useQuery({
        queryKey: ['userProfileData'],
        queryFn: async () => {
            const res = await axiosSecure(`/students/${user?.id}`);
            return res.data;
        },
        enabled: !!user
    })

    console.log(userProfileData);

    return (
        <div>
            <SectionHeader section_title="Profile" />

            Plans to add these features: <br />
            1. Editable Fields: Students details with updatable fields

            2. Educational Info: Department name, Session and Current semester
        </div>
    );
};

export default StudentProfile;