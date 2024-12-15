import Link from "next/link"

const AdminPage = () => {
    return (
        <section>
            <div className="min-h-screen w-full flex flex-col gap-6 justify-center items-center">
                <h2 className="font-bold text-5xl">Admin Page</h2>
                <p className="text-xl font-semibold">Developed Soon</p>
                <Link href={"/"}>Back To Website Client</Link>
            </div>
        </section>
    )
}

export default AdminPage
