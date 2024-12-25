import Dropdown from "@/component/drop-down"
import AdminLayout from "../layout"

const AdminNews = () => {

    return (
        <AdminLayout>
            <h2 className="my-6 text-2xl font-semibold">News Management</h2>
            <div id="dropdownButton" className="bg-white border-2 border-slate-200 h-fit rounded-xl m-1 mb-96">
                <table className="w-full  rounded-xl">
                    <thead className="bg-[#f5f6fa] p-4 rounded-xl">
                        <tr className="p-4">
                            <td className="px-3 py-2">ID</td>
                            <td className="px-3 py-2">Title</td>
                            <td className="px-3 py-2">Description</td>
                            <td className="px-3 py-2">Slug</td>
                            <td className="px-3 py-2">Status</td>
                            <td className="px-1 py-2 text-center">Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="p-4">
                            <td className="px-3 py-3">1</td>
                            <td className="px-3 py-3">Operasi Pasar Murni</td>
                            <td className="px-3 py-3">Operasi Pasar Murni bersama pihak BI untuk pencegahan inflasi</td>
                            <td className="px-3 py-3">operasi-pasar-murni</td>
                            <td className="pl-3 pr-1 py-3">publish</td>

                            <td className="px-1 py-3 flex justify-center items-center ">
                                <div className="relative">
                                    <button onClick={() => {
                                        document.getElementById(`action`)?.classList.toggle('hidden')
                                    }} className="relative">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                                        </svg>

                                    </button>
                                    <Dropdown ID={`action`} custom="right-4 top-2">
                                        <div className="flex gap-2 flex-col p-2 rounded-lg border-2 border-slate-300 drop-shadow-2xl">
                                            <button className="px-2.5 py-1.5 bg-slate-200 hover:bg-slate-400 flex items-center justify-center rounded text-sm">Details</button>
                                            <button className="px-2.5 py-1.5 bg-slate-200 hover:bg-slate-400 flex items-center justify-center rounded text-sm">Approve</button>
                                            <button className="px-2.5 py-1.5 bg-slate-200 hover:bg-slate-400 flex items-center justify-center rounded text-sm">Reject</button>
                                            <button className="px-2.5 py-1.5 bg-slate-200 hover:bg-slate-400 flex items-center justify-center rounded text-sm">Cancel</button>
                                        </div>
                                    </Dropdown>
                                </div>

                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </AdminLayout>
    )
}

export default AdminNews
