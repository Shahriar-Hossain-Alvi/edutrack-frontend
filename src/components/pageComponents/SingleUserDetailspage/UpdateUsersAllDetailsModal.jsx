import React, { useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure.jsx';
import { useForm } from 'react-hook-form';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { useQuery } from '@tanstack/react-query';
import errorMessageParser from '../../../utils/errorMessageParser/errorMessageParser.js';
import toast from 'react-hot-toast';

const UpdateUsersAllDetailsModal = ({ singleUserDetails, refetch, id }) => {
    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    const [isFormLoading, setIsFormLoading] = useState(false);

    // DEPARTMENTS query
    const { data: allDepartments, isPending, error, isError, refetch: allDepartmentsRefetch } = useQuery({
        queryKey: ['allDepartments'],
        queryFn: async () => {
            const res = await axiosSecure('/departments/');
            return res.data;
        }
    })

    // SEMESTERS query
    const { data: allSemesters, isPending: isSemesterPending, error: semesterError, isError: isSemesterError, refetch: totalSemestersRefetch } = useQuery({
        queryKey: ['totalSemesters'],
        queryFn: async () => {
            const res = await axiosSecure('/semesters/');
            return res.data;
        }
    })

    if (isError) {
        console.log(error);
        const message = errorMessageParser(error);
        toast.error(message || 'Failed to fetch departments');
    }

    if (isSemesterError) {
        console.log(semesterError);
        const message = errorMessageParser(semesterError);
        toast.error(message || 'Failed to fetch semesters');
    }

    const { email, role, student, teacher, username, is_active } = singleUserDetails;

    console.log(singleUserDetails);
    console.log(allSemesters);

    const updateUserDetails = async (data) => {
        console.log(data);
    }


    return (
        // <dialog id="update_users_other_details_modal" className="modal">
        <div className="modal-box">
            <h3 className="font-bold text-lg text-warning">Edit Other Details</h3>


            <form className='space-y-3 mt-4' onSubmit={handleSubmit(updateUserDetails)}>
                {/* name */}
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        className="input input-bordered w-full mt-2"
                        defaultValue={student && student.name || teacher && teacher.name}
                        {...register("updatedName")}
                    />
                </div>

                {/* Student Specific Data (Registration Number, Semester, Session) */}
                {
                    student && (
                        <div className='space-y-4'>
                            {/* registration number */}
                            <div>
                                <label>Registration Number</label>
                                <input
                                    type="text"
                                    className="input input-bordered w-full mt-2"
                                    defaultValue={student && student.registration}
                                    {...register("updatedRegistrationNumber")}
                                />
                            </div>

                            {/* Session */}
                            <div>
                                <label>Session <span className='text-info text-xs'>(eg: 2022-2023)</span></label>
                                <input
                                    type="text"
                                    className="input input-bordered w-full mt-2"
                                    defaultValue={student && student.session}
                                    {...register("updatedSession")}
                                />
                            </div>

                            {/* Semester */}
                            <div>
                                <label className="label mr-2">Semester</label>
                                {isSemesterPending && <input disabled placeholder='Loading...' />}
                                {
                                    !isSemesterPending && <select className="select"
                                        defaultValue={(student?.semester?.id) ? student.semester.id : ""}
                                        {...register("updatedSemester")} >
                                        <option disabled value="">Pick a semester</option>
                                        {
                                            allSemesters?.map((semester) =>
                                                <option key={semester.id} value={semester.id}>
                                                    {semester.semester_number} - {semester.semester_name.toUpperCase()}
                                                </option>)
                                        }
                                    </select>}
                            </div>
                        </div>
                    )
                }

                {/* Department */}
                <div>
                    <label className="label mr-2">Department</label>
                    {isPending && <input disabled placeholder='Loading...' />}
                    {
                        !isPending && <select className="select w-full mt-2"
                            defaultValue={(student?.department?.id) ? student.department.id : ""}
                            {...register("updatedDepartment")} >
                            <option disabled value="">Pick a department</option>
                            {
                                allDepartments?.map((department) =>
                                    <option key={department.id} value={department.id}>
                                        {department.department_name.toUpperCase()}
                                    </option>)
                            }
                        </select>}
                </div>

                {/* Mobile */}
                <div>
                    <label>Mobile</label>
                    <input
                        type="text"
                        className="input input-bordered w-full mt-2"
                        defaultValue={student && student.mobile_number || teacher && teacher.mobile_number}
                        {...register("updatedMobileNumber")}
                    />
                </div>


                {/* Date of Birth */}
                <div>
                    <label>Date of Birth</label>
                    {/* <input
                        type="date"
                        className="input input-bordered w-full mt-2"
                        defaultValue={(student?.date_of_birth || teacher?.date_of_birth) ? new Date(student?.date_of_birth || teacher?.date_of_birth).toISOString().split('T')[0] : ""}
                        {...register("updatedDateOfBirth")}
                    /> */}
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

export default UpdateUsersAllDetailsModal;