import { useQuery } from "@tanstack/react-query";
import SectionHeader from "../../utils/SectionHeader/SectionHeader.jsx";
import useAxiosSecure from "../../hooks/useAxiosSecure.jsx";
import useAuth from "../../hooks/useAuth.jsx";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { SingleUserDetailsSkeleton } from "../../components/ui/Skeletons.jsx";
import errorMessageParser from "../../utils/errorMessageParser/errorMessageParser.js";
// @ts-ignore
import defaultImage from "../../assets/blank-profile-picture.png";
import { toast } from "react-hot-toast";
import { FaEdit, FaUserEdit } from "react-icons/fa";
import { ImZoomIn } from "react-icons/im";
import UpdateUsersAllDetailsModal from "../../components/pageComponents/SingleUserDetailsPage/UpdateUsersAllDetailsModal.jsx";


const StudentProfile = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [formLoading, setFormLoading] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const { data: userProfileData, isPending, isError, error } = useQuery({
        queryKey: ['userProfileData'],
        queryFn: async () => {
            const res = await axiosSecure(`/students/${user?.id}`);
            return res.data;
        },
        enabled: !!user
    })

    console.log(userProfileData);


    // skeleton
    if (isPending) {
        return <SingleUserDetailsSkeleton />;
    }

    // Error Message
    if (isError) {
        const message = errorMessageParser(error);
        return <h2 className="text-error text-2xl text-center">{message || 'User Details not found'}</h2>;
    }


    // user image
    const userImage = userProfileData?.photo_url || defaultImage;


    return (
        <div>
            Plans to add these features: <br />
            1. Editable Fields: Students details with updatable fields

            2. Educational Info: Department name, Session and Current semester

            <div className="bg-base-100 p-4 rounded-xl">
                <div className="border-b border-base-300">
                    <SectionHeader section_title='Profile' />
                </div>

                {/* user details */}
                < div className="flex flex-col sm:flex-row sm:gap-5 py-5">
                    {/* Picture left square */}
                    <div className="group/user-image mx-auto sm:mx-0">
                        <div className="sm:min-w-32 max-w-52 rounded-3xl relative">
                            <img className="rounded-3xl w-full" src={userImage || defaultImage} />


                            {/* Profile Picture */}
                            <div className="absolute bottom-0 left-0 flex justify-center gap-5 place-items-center bg-neutral opacity-55 w-full sm:min-w-32 max-w-52 h-12 rounded-b-3xl">
                                {/* Profile Picture Full View */}
                                <button className="btn btn-sm btn-circle btn-ghost hover:bg-primary-tint hover:text-primary hover:border border-primary shadow-none text-white"
                                    onClick={() => {
                                        // @ts-ignore
                                        document.getElementById('show_full_profile_picture_modal').showModal()
                                    }}
                                >
                                    <ImZoomIn />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Basic Details */}
                    <div className="sm:grow flex flex-col justify-center">
                        {/* Name & Status */}
                        <div className="flex items-center gap-2 mt-4 md:mt-0">
                            <h2 className="text-xl sm:text-3xl font-bold">
                                {userProfileData?.name}
                            </h2>
                            <button className={`badge text-black rounded-full ${userProfileData?.user?.is_active ? "bg-success" : "bg-error"}`}>{userProfileData?.user?.is_active ? "Active" : "Disabled"}</button>
                        </div>


                        {/* username, email, mobile */}
                        <div className="mt-3 space-y-2">
                            <h4 className="text-gray-500">Username: <span className="font-semibold text-base-content">{userProfileData?.user?.username}</span></h4>

                            <h4 className="text-gray-500">Email: <span className="font-semibold text-base-content">{userProfileData?.user?.email}</span></h4>

                            <h4 className="text-gray-500">Mobile: <span className="font-semibold">{userProfileData?.user?.mobile_number}</span></h4>
                        </div>
                    </div>
                </div>
            </div>


            {/* Role Specific details */}
            <div className="mt-10 bg-base-100 p-4 rounded-xl">
                <div className="border-b border-base-300 flex items-center mb-5 justify-between">
                    <SectionHeader section_title={"More Details"} />

                    <div className="sm:tooltip sm:tooltip-left" data-tip={"Edit Details"}>
                        <button
                            // @ts-ignore
                            onClick={() => document.getElementById("update_users_other_details_modal").showModal()}
                            className="btn btn-sm sm:btn-md btn-primary"
                        >
                            <FaEdit /> Edit
                        </button>
                    </div>
                </div>


                {/* Student Specific Data */}
                {
                    <div className="grid sm:grid-cols-3 justify-between items-center md:text-lg mb-4 space-y-4 sm:space-y-0 sm:gap-4">
                        {/* Registration Number */}
                        <div>
                            <h4 className="text-gray-500">Registration Number</h4>
                            <h4 className="font-semibold">{userProfileData?.registration}</h4>
                        </div>

                        {/* Current Semester */}
                        <div className="capitalize">
                            <h4 className="text-gray-500">Current Semester</h4>
                            <h4 className="font-semibold">{
                                userProfileData?.semester?.semester_number
                                ||
                                <span className="text-error">N/A</span>
                            }(
                                {userProfileData?.semester?.semester_name
                                    ||
                                    <span className="text-error">N/A</span>
                                })</h4>
                        </div>

                        {/* Session */}
                        <div>
                            <h4 className="text-gray-500">Session</h4>
                            <h4 className="font-medium">{userProfileData?.session || <span className="text-error">N/A</span>}</h4>
                        </div>
                    </div>
                }

                <div className="md:text-lg">
                    <div className="grid sm:grid-cols-3 justify-between items-center mb-4 space-y-4 sm:space-y-0 sm:gap-4">
                        {/* Date of Birth */}
                        <div>
                            <h4 className="text-gray-500">Date of Birth</h4>

                            <h4 className="font-medium">
                                {userProfileData?.date_of_birth?.split("T")[0]}

                                {(userProfileData.date_of_birth === null) && <span className="text-error">N/A</span>}

                                <span className="text-sm italic ml-1">(YYYY-MM-DD)</span>
                            </h4>
                        </div>

                        <div className="sm:col-span-2">
                            {/* Department */}
                            <h4 className="text-gray-500">Department</h4>
                            <h4 className="font-medium">
                                {
                                    userProfileData?.department?.department_name.toUpperCase()
                                }
                                {
                                    (userProfileData.department === null) && <span className="text-error">Not Assigned</span>
                                }
                            </h4>
                        </div>
                    </div>

                    <div className="mb-4">
                        {/* Present Address */}
                        <h4 className="text-gray-500">Present Address</h4>
                        <h4>
                            {userProfileData.present_address}
                            {userProfileData.present_address === "" && <span className="text-error">N/A</span>}
                        </h4>
                    </div>

                    <div>
                        {/* Permanent Address */}
                        <h4 className="text-gray-500">Permanent Address</h4>

                        <h4 className="font-medium">
                            {userProfileData.permanent_address}
                            {userProfileData.permanent_address === "" && <span className="text-error">N/A</span>}
                        </h4>
                    </div>
                </div>
            </div>

            {/* Other data (Teacher/Student Tables data) update Modal  */}
            {/* <dialog id="update_users_other_details_modal" className="modal">
                <UpdateUsersAllDetailsModal
                    singleUserDetails={singleUserDetails}
                    singleUserDetailsRefetch={singleUserDetailsRefetch}
                    user_specific_table_id={student && student.id || teacher && teacher.id}
                />
            </dialog> */}

            {/* profile image show and update modal */}
            <dialog id="show_full_profile_picture_modal" className="modal">
                <div className="modal-box">
                    <div className="rounded">
                        <img src={userImage || defaultImage} />
                    </div>
                    <h3 className="font-bold text-lg text-center mt-3">{userProfileData.name}</h3>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>

        </div >
    );
};

export default StudentProfile;