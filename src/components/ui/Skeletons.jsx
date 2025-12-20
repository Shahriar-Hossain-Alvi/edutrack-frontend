
export const DepartmentsSkeleton = () => {
    return <div>
        <table className="table">
            {/* head */}
            <thead>
                <tr>
                    <th className="w-3">#</th>
                    <th className="w-16">Department Name</th>
                    <th className="w-16">Department ID</th>
                </tr>
            </thead>
            <tbody>
                {/* row 1 */}
                <tr>
                    <th className="skeleton h-5 w-3"></th>
                    <td className="skeleton h-5 w-16"></td>
                    <td className="skeleton h-5 w-16"></td>
                </tr>
                {/* row 2 */}
                <tr>
                    <th className="skeleton h-5 w-3"></th>
                    <td className="skeleton h-5 w-16"></td>
                    <td className="skeleton h-5 w-16"></td>
                </tr>
                {/* row 3 */}
                <tr>
                    <th className="skeleton h-5 w-3"></th>
                    <td className="skeleton h-5 w-16"></td>
                    <td className="skeleton h-5 w-16"></td>
                </tr>
            </tbody>
        </table>
    </div>
};


export const SemestersSkeleton = () => {
    return <div>
        <table className="table">
            {/* head */}
            <thead>
                <tr>
                    <th className="w-3">#</th>
                    <th className="w-16">Semester Name</th>
                    <th className="w-16">Semester Number</th>
                    <th className="w-16">Semester ID</th>
                </tr>
            </thead>
            <tbody>
                {/* row 1 */}
                <tr>
                    <th className="skeleton h-5 w-3"></th>
                    <td className="skeleton h-5 w-16"></td>
                    <td className="skeleton h-5 w-16"></td>
                    <td className="skeleton h-5 w-16"></td>
                </tr>
                {/* row 2 */}
                <tr>
                    <th className="skeleton h-5 w-3"></th>
                    <td className="skeleton h-5 w-16"></td>
                    <td className="skeleton h-5 w-16"></td>
                    <td className="skeleton h-5 w-16"></td>
                </tr>
                {/* row 3 */}
                <tr>
                    <th className="skeleton h-5 w-3"></th>
                    <td className="skeleton h-5 w-16"></td>
                    <td className="skeleton h-5 w-16"></td>
                    <td className="skeleton h-5 w-16"></td>
                </tr>
            </tbody>
        </table>
    </div>
};