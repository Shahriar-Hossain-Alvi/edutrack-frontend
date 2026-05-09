import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect } from "react";
import errorMessageParser from "../../utils/errorMessageParser/errorMessageParser";
import toast from "react-hot-toast";
import SectionHeader from "../../utils/SectionHeader/SectionHeader";


const RecentAuditLogs = () => {
    const axiosSecure = useAxiosSecure();

    const { data: recentAuditLogs, isPending, isError, error } = useQuery({
        queryKey: ['recentAuditLogs'],
        queryFn: async () => {
            const res = await axiosSecure('/adminDashboard/recentAuditLogs');
            return res?.data;
        }
    })

    console.log(recentAuditLogs);

    useEffect(() => {
        if (isError) {
            const message = errorMessageParser(error);
            toast.error(message || "Failed to fetch recent audit logs");
        }
    }, [isError])

    return (
        <div>


            <div className="flex justify-between items-center">
                <SectionHeader section_title="Recent Audit Logs" />

                <button className="btn btn-info btn-sm">All Logs</button>
            </div>


            {isPending ?
                <span className="loading loading-spinner text-info"></span>
                :
                <>
                    <div className="overflow-x-auto">
                        <table className="table table-xs sm: table-md">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Path</th>
                                    <th>Action</th>
                                    <th>Details</th>
                                    <th>Created By</th>
                                    <th>Created At</th>
                                    <th>IP Address</th>
                                    <th>Level</th>
                                    <th>Method</th>
                                    <th>Payload</th>
                                    <th>Updated At</th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                                {recentAuditLogs?.map((auditLog) => <tr key={auditLog.id}>
                                    <th>{auditLog?.id}</th>
                                    <td className="text-left">{auditLog?.path}</td>
                                    <td className="text-left">{auditLog?.action}</td>
                                    <td className="text-left">{auditLog?.details}</td>
                                    <td>{auditLog?.created_by || "N/A"}</td>
                                    <td>{new Date(auditLog?.created_at).toLocaleString()}</td>
                                    <td>{auditLog?.ipAddress || "N/A"}</td>
                                    <td>{auditLog?.level.toUpperCase()}</td>
                                    <td>{auditLog?.method}</td>
                                    <td>{auditLog?.payload}</td>
                                    <td>{new Date(auditLog?.updated_at).toLocaleString()}</td>
                                </tr>)}
                            </tbody>
                        </table>
                    </div>
                </>
            }

        </div>
    );
};

export default RecentAuditLogs;