import Dropdown from "@/component/dropdown"
import AdminLayout from "../../../component/admin/__layout"
import Link from "next/link"
import { getAllNews, News } from "@/services/news";
import { formatDate } from "@/utils/convert-date";

export async function getServerSideProps() {
    const news = await getAllNews()
    return {
        props: { news },
    };
}

const AdminNews = ({ news }: { news: (News & { author_name: string })[] }) => {

    return (
        <AdminLayout>
            <div className="flex gap-4 w-full justify-between my-4 pr-8">
                <h2 className="my-6 text-2xl font-semibold">News Management</h2>
                <button className="flex h-fit items-center gap-2 py-2 px-4 bg-toska text-white hover:bg-toska-dark rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-upload" viewBox="0 0 16 16">
                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                        <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z" />
                    </svg>
                    <Link href={"/admin/news/create"} >
                        Add New Article
                    </Link>
                </button>
            </div>
            <main className="overflow-x-auto overflow-visible h-screen scrollbar-hidden">
                <div id="dropdownButton" className="bg-white border-2 border-slate-200 h-fit w-fit rounded-xl m-1">
                    <table className="min-w-[1500px] rounded-xl">
                        <thead className="bg-[#f5f6fa] p-4 rounded-xl">
                            <tr className="p-4 rounded-xl">
                                <td className="px-3 py-2 rounded-ss-xl">No</td>
                                <td className="px-3 py-2">Category</td>
                                <td className="px-3 py-2">Title</td>
                                <td className="px-3 py-2">Description</td>
                                <td className="px-3 py-2">Author</td>
                                <td className="px-3 py-2">Date</td>
                                <td className="px-3 py-2">Created At</td>
                                <td className="px-3 py-2">Updated At</td>
                                <td className="px-3 py-2">Meta Title</td>
                                <td className="px-3 py-2">Meta Description</td>
                                <td className="px-3 py-2">Meta Keyword</td>
                            </tr>
                        </thead>
                        <tbody className="rounded-xl overflow-x-auto">
                            {news.map((news, i) => (
                                <tr key={i} className="p-4 overflow-x-scroll h-fit">
                                    <td className="px-3 content-center">
                                        <div className="relative content-center">
                                            <button onClick={() => {
                                                document.getElementById(`action`)?.classList.toggle('hidden')
                                            }} className="relative flex justify-center items-center bg-slate-500 text-white py-1 px-2.5 w-fit h-fit rounded-full">
                                                {i + 1}
                                            </button>
                                            <Dropdown ID={`action`} custom="left-4 top-2">
                                                <div className="flex gap-2 flex-col p-2 rounded-lg border-2 border-slate-300 drop-shadow-2xl">
                                                    <Link href={`/news/${news.slug}`} className="px-2.5 py-1.5 bg-slate-200 hover:bg-slate-400 flex items-center justify-center rounded text-sm">Preview</Link>
                                                    <Link href={`/admin/news/slug/${news.slug}`} className="px-2.5 py-1.5 bg-slate-200 hover:bg-slate-400 flex items-center justify-center rounded text-sm">Details</Link>
                                                    <Link href={`/admin/news/${news.id}`} className="px-2.5 py-1.5 bg-slate-200 hover:bg-slate-400 flex items-center justify-center rounded text-sm">Update</Link>
                                                    <button onClick={() =>  document.getElementById(`action`)?.classList.add('hidden')} className="px-2.5 py-1.5 bg-blue-200 hover:bg-blue-400 flex items-center justify-center rounded text-sm">Cancel</button>
                                                    <button className="px-2.5 py-1.5 bg-red-200 hover:bg-red-400 flex items-center justify-center rounded text-sm">Remove</button>
                                                </div>
                                            </Dropdown>
                                        </div>
                                    </td>

                                    <td className="px-3 py-3 w-40">{news.category}</td>
                                    <td className="px-3 py-3 w-[900px] text-nowrap">{news.title.length > 20 ? `${news.title.slice(0, 20)}....` : news.title}</td>
                                    <td className="px-3 py-3 w-[900px] text-nowrap">{news.description.length > 48 ? `${news.description.slice(0, 48)}....` : news.description}</td>
                                    <td className="px-3 py-3 w-56 text-nowrap">{news.author_name}</td>
                                    <td className="px-3 py-3 w-56 text-nowrap">{formatDate(news.date)}</td>
                                    <td className="px-3 py-3 w-56 text-nowrap">{formatDate(news.created_at)}</td>
                                    <td className="px-3 py-3 w-56 text-nowrap">{formatDate(news.updated_at)}</td>
                                    <td className="px-3 py-3 w-[900px] text-nowrap">{news.meta_title.length > 20 ? `${news.meta_title.slice(0, 20)}....` : news.meta_title}</td>
                                    <td className="px-3 py-3 w-[900px] text-nowrap">{news.meta_description.length > 48 ? `${news.meta_description.slice(0, 48)}....` : news.meta_description}</td>
                                    <td className="px-3 py-3 w-[900px] text-nowrap">{news.meta_keywords.length > 48 ? `${news.meta_keywords.slice(0, 48)}....` : news.meta_keywords}</td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </AdminLayout>
    )
}

export default AdminNews