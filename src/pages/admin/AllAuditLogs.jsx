import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import errorMessageParser from "../../utils/errorMessageParser/errorMessageParser";
import toast from "react-hot-toast";
import SectionHeader from "../../utils/SectionHeader/SectionHeader";

const AllAuditLogs = () => {
    // Pagination states
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(10);
    const axiosSecure = useAxiosSecure();
    const [expandedRowId, setExpandedRowId] = useState(null);

    const { data: allAuditLogs, isPending, isError, error } = useQuery({
        queryKey: ['recentAuditLogs', page, size],
        queryFn: async () => {
            const params = new URLSearchParams();

            // send page and size to backend
            params.append('page', page.toString());
            params.append('size', size.toString());

            const res = await axiosSecure(`/auditLogs/?${params.toString()}`);

            return res?.data;
        }
    })

    useEffect(() => {
        if (isError) {
            const message = errorMessageParser(error);
            toast.error(message || "Failed to fetch audit logs");
        }
    }, [isError])


    const totalPages = allAuditLogs?.pages || 0;

    console.log(allAuditLogs);

    return (
        <div>
            <div className='flex items-center gap-1'>
                <SectionHeader section_title="All Audit Logs" />
                <span className='font-bold text-xl'>({allAuditLogs?.items?.length})</span>
            </div>

            <h2>{allAuditLogs?.items?.length === 0 && "No recent audit logs found"}</h2>

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
                                    <th className="text-center">Payload</th>
                                    <th>Updated At</th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                                {allAuditLogs?.items?.map((auditLog) => <tr key={auditLog.id}>
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

                                    <td className="text-left min-w-40">
                                        {auditLog?.payload === null ? "N/A" :
                                            <span>
                                                Exception Type: {auditLog?.payload?.exception_type || "N/A"}
                                                <br />
                                                <br />
                                                Raw Error: {auditLog?.payload?.raw_error || "N/A"}
                                            </span>}
                                    </td>

                                    <td>{new Date(auditLog?.updated_at).toLocaleString()}</td>
                                </tr>)}
                            </tbody>
                        </table>
                    </div>
                </>
            }


            {/* pagination buttons */}
            <div>
                <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-4">
                    <div className="flex items-center gap-2">
                        <span className="text-sm">Show:</span>
                        <select
                            className="select select-bordered select-sm"
                            value={size}
                            onChange={(e) => { setSize(Number(e.target.value)); setPage(1); }}
                        >
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={20}>20</option>
                            <option value={50}>50</option>
                        </select>
                    </div>

                    <div className="join">
                        <button
                            className="join-item btn btn-sm"
                            disabled={page === 1}
                            onClick={() => setPage(p => p - 1)}
                        >« Prev</button>

                        <button className="join-item btn btn-sm bg-base-300">
                            Page {page} of {totalPages}
                        </button>

                        <button
                            className="join-item btn btn-sm"
                            disabled={page === totalPages}
                            onClick={() => setPage(p => p + 1)}
                        >Next »</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllAuditLogs;