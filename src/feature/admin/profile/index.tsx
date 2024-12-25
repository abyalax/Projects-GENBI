import AdminLayout from "../layout"
import { useState } from "react";
import { SidebarNavigation } from "../routes";
import Image from "next/image";

const AdminProfile = () => {
    const { routesGovernance } = SidebarNavigation()
    const [path, setPath] = useState("Ketua")
    const [bph, setBPH] = useState(false)

    return (
        <AdminLayout>
            <h2 className="text-2xl font-semibold my-8">GenBI Governance Structure </h2>
            <main className="flex gap-6">
                <aside className="w-1/4 h-fit bg-white p-2 rounded-lg ">
                    <nav className="flex flex-col gap-2">
                        {routesGovernance.primary.map((route, index) => (
                            <button key={index} onClick={() => setPath(route.name)} className={`flex items-center gap-2 px-4 py-2 mr-28 text-lg hover:bg-slate-200 ${route.name === path ? "bg-toska text-white hover:bg-toska-dark" : ""} w-full cursor-pointer rounded`}>
                                {route.name}
                            </button>
                        ))}
                        <button onClick={() => { setBPH(!bph); setPath("BPH") }} className="flex items-center justify-between px-4 py-2 text-lg hover:bg-slate-200 ">
                            BPH
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" strokeWidth={.5} stroke="black" fill="currentColor" className={`bi bi-chevron-up rotate-90 ${bph ? "rotate-180" : ""}`} viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z" />
                            </svg>
                        </button>
                        {bph && routesGovernance.bph.map((route, index) => (
                            <button key={index} onClick={() => setPath(`Divisi ${route.name}`)} className={`flex items-center gap-2 px-4 py-2 text-lg hover:bg-slate-200 ${`Divisi ${route.name}` === path ? "bg-toska text-white hover:bg-toska-dark" : ""} w-full cursor-pointer rounded`}>
                                {route.icon}
                                {route.name}
                            </button>
                        ))}
                    </nav>
                </aside>
                <main className="w-3/4 rounded-lg bg-white p-4">
                    <h2 className="text-xl font-semibold">Profile {path}</h2>
                    <div className="flex gap-7 p-4 m-4 border border-slate-300 rounded-lg">
                        <Image className="w-36 h-36 object-cover object-center rounded-full" src={"/assets/dummy/1.jpg"} width={500} height={500} alt="Image Ketua" />
                        <div className="flex gap-4 border-slate-300 rounded-lg p-2">
                            <div className="flex flex-col gap-2 ">
                                <h2 className="font-semibold">Nama</h2>
                                <h2 className="font-semibold">Fakultas</h2>
                                <h2 className="font-semibold">Prodi</h2>
                                <h2 className="font-semibold">Semester</h2>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p>: Abie Budi Pangestiko</p>
                                <p>: Ekonomi dan Bisnis</p>
                                <p>: Manajemen</p>
                                <p>: 5</p>
                            </div>
                        </div>
                    </div>
                    <h2 className="text-xl font-semibold my-6">Personal Information</h2>
                    <div className="border border-slate-300 rounded-lg p-4 m-4 flex gap-9">
                        <div>
                            <h2 className="my-2 font-semibold">Nickname</h2>
                            <p className="mb-6">Abie</p>
                            <h2 className="my-2 font-semibold">Email Address</h2>
                            <p className="mb-6">abie@gmail.com</p>
                        </div>
                        <div>
                            <h2 className="my-2 font-semibold">Fullname</h2>
                            <p className="mb-6">Abie Budi Pangestiko</p>
                            <h2 className="my-2 font-semibold">Phone</h2>
                            <p className="mb-6">08113616263</p>
                        </div>
                    </div>
                </main>
            </main>

        </AdminLayout>
    )
}

export default AdminProfile
