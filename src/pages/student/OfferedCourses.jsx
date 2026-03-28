import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure.jsx";
import useAuth from "../../hooks/useAuth.jsx";
import SectionHeader from "../../utils/SectionHeader/SectionHeader.jsx";

const OfferedCourses = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: offeredCourses, isPending, isError, error } = useQuery({
        queryKey: ['offeredCourses'],
        queryFn: async () => {
            const res = await axiosSecure(`/subject_offering/studentsOfferedSubjects/${user?.id}`);
            return res.data;
        },
        enabled: !!user
    })

    console.log(offeredCourses);

    return (
        <div>
            <SectionHeader section_title='My Offered Courses' />

            <div>
                {
                    offeredCourses?.map((offeredCourse, idx) => (
                        <div key={idx} className="mb-5">
                            <h2 className="uppercase text-center text-xl font-semibold">{offeredCourse?.semester_name} Semester</h2>
                            {offeredCourse.subject_name}

                            <div className="overflow-x-auto">
                                <table className="table">
                                    {/* head */}
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Subject</th>
                                            <th>Code</th>
                                            <th>Teacher</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {offeredCourse?.subjects?.map((subject, number) => (
                                            <tr className="hover:bg-base-300" key={subject?.id}>
                                                <th>{number + 1}</th>
                                                <td>{subject?.subject?.subject_title}</td>
                                                <td>{subject?.subject?.subject_code}</td>
                                                <td>{subject?.taught_by?.name} <br />
                                                    <span className="opacity-70 uppercase">From {subject?.taught_by?.department?.department_name.split('-')[0]} department</span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default OfferedCourses;