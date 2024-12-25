import AdminLayout from "../layout"

const AdminHome = () => {
    return (
        <AdminLayout>
            <div className="min-h-screen flex flex-col text-center gap-6 justify-center items-center">
                <h2 className="w-full text-4xl font-semibold">Dashboard Page</h2>
                <p className="font-semibold text-xl">Developed Soon, see other management page at sidebar</p>
            </div>
        </AdminLayout>
    )
}

export default AdminHome
