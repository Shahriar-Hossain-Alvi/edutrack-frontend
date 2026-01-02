import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import useAxiosSecure from '../../../hooks/useAxiosSecure.jsx';
import toast from 'react-hot-toast';
import errorMessageParser from '../../../utils/errorMessageParser/errorMessageParser.js';

const UpdateUserAuthDetailsByAdminModal = ({ singleUserDetails, refetch, id }) => {
    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    const [isFormLoading, setIsFormLoading] = useState(false);

    const { email, role, student, teacher, username, is_active } = singleUserDetails;

    // user details update
    const updateUserDetails = async (data) => {
        const updatedUserData = {};

        if (data.updatedEmail !== email) {
            updatedUserData.email = data.updatedEmail
            updatedUserData.username = data.updatedEmail
        };

        const account_status = data.updateAccountStatus === 'active' ? true : false;

        if (account_status !== is_active) updatedUserData.is_active = account_status;

        if (Object.keys(updatedUserData).length === 0) {
            // @ts-ignore
            document.getElementById('update_user_details_modal').close();
            return toast.error('Nothing changed in the form. Cancelling update.');
        };

        try {
            setIsFormLoading(true);
            const res = await axiosSecure.patch(`/users/${id}`, updatedUserData);
            console.log(res);
            // @ts-ignore
            document.getElementById('update_user_details_modal').close();
            refetch();
            // @ts-ignore
            toast.success(res?.data?.message);
        } catch (error) {
            console.log(error);
            // @ts-ignore
            document.getElementById('update_user_details_modal').close();
            const message = errorMessageParser(error);
            toast.error(message || 'Failed to update user details');
        } finally {
            setIsFormLoading(false);
            reset({
                updatedEmail: updatedUserData.email || email,
                updateAccountStatus: updatedUserData.is_active !== undefined
                    ? (updatedUserData.is_active ? "active" : "disable")
                    : (is_active ? "active" : "disable")
            });
        }
    }

    return (
        // <dialog id="update_user_details_modal" className="modal">
        <div className="modal-box">
            <h3 className="font-bold text-lg text-warning">Edit User Details</h3>


            <form className='space-y-3 mt-4' onSubmit={handleSubmit(updateUserDetails)}>
                {/* email */}
                <div className="w-full space-y-4">
                    <div>
                        <label>Email Address <span className="text-warning text-xs block">(Editing/Updating the email address will also update the username)</span></label>
                        <input
                            type="email"
                            className="input input-bordered w-full mt-2"
                            defaultValue={email}
                            {...register("updatedEmail")}
                        />
                    </div>

                    {/* account status */}
                    <div>
                        <label className="label mr-2">Account Status</label>
                        <select className="select" {...register("updateAccountStatus")} >
                            <option value="active">Active 🟢</option>
                            <option value="disable">Disable 🔴</option>
                        </select>
                    </div>
                </div>
                <button className={`btn ${isFormLoading && "btn-disabled"} btn-success w-full`} type='submit' disabled={isFormLoading}>
                    {isFormLoading ? <AiOutlineLoading3Quarters className='animate-spin' /> : "Update"}
                </button>
            </form>

            <div className="modal-action">
                <form method="dialog"><button className="btn btn-error">Cancel</button></form>
            </div>
        </div>
        //</dialog>
    );
};

export default UpdateUserAuthDetailsByAdminModal;