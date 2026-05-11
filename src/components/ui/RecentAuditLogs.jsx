import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import errorMessageParser from "../../utils/errorMessageParser/errorMessageParser";
import toast from "react-hot-toast";
import SectionHeader from "../../utils/SectionHeader/SectionHeader";
import { Link } from "react-router-dom";


const RecentAuditLogs = () => {
    const axiosSecure = useAxiosSecure();
    const [expandedRowId, setExpandedRowId] = useState(null);

    const { data: recentAuditLogs, isPending, isError, error } = useQuery({
        queryKey: ['recentAuditLogs'],
        queryFn: async () => {
            const res = await axiosSecure('/adminDashboard/recentAuditLogs');
            return res?.data;
        }
    })

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

                <Link to={`/admin/audit-logs`} className="btn btn-info btn-sm">All Logs</Link>
            </div>

            <h2>{recentAuditLogs?.length === 0 && "No recent audit logs found"}</h2>

            {isPending ?
                <span className="loading loading-spinner text-info"></span>
                :
                <>
                    <div className="overflow-x-auto">
                        <table className="table table-xs sm:table-md">
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
                                    <td className="text-left min-w-48">{auditLog?.action}</td>
                                    <td className="text-left min-w-40">
                                        {expandedRowId === auditLog?.id ? auditLog?.details : auditLog?.details.slice(0, 50)}...
                                        {
                                            expandedRowId === auditLog?.id ?
                                                <span onClick={() => setExpandedRowId(null)} className="text-nowrap italic link link-warning">see less</span>
                                                :
                                                <span onClick={() => setExpandedRowId(auditLog?.id)} className="text-nowrap italic link link-info opacity-70">see more</span>
                                        }
                                    </td>
                                    <td>{auditLog?.created_by || "N/A"}</td>
                                    <td>{new Date(auditLog?.created_at).toLocaleString()}</td>
                                    <td>{auditLog?.ipAddress || "N/A"}</td>
                                    <td className={`${auditLog?.level === "info" ? "text-info" : auditLog?.level === "warning" ? "text-warning" : auditLog?.level === "error" ? "text-error" : auditLog?.level === "critical" ? "text-error font-bold" : "text-info"}`}>{
                                        auditLog?.level.toUpperCase()
                                    }</td>
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