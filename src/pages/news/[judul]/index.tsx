import Footer from "@/component/footer"
import Navbar from "@/component/navbar"
import Head from "next/head"
import Image from "next/image"

const news = `
    KBRN, Kediri: Kantor Perwakilan Bank Indonesia (KPw BI) Kediri menggelar acara temu komunitas dengan tema "Perkuat Sinergi untuk Transformasi dan Ketahanan Ekonomi" di IKCC Kediri, Senin (09/12/2024).

Acara ini dihadiri oleh GenBI Universitas Islam Kadiri, komunitas baru penerima beasiswa Bank Indonesia, yang hadir atas undangan resmi dari BI.

Kegiatan ini bertujuan untuk mempererat hubungan antara Bank Indonesia dengan komunitas muda penerima beasiswa, sekaligus mengenalkan pentingnya data ekonomi dalam mendukung kebijakan dan pengembangan daerah.

“Kegiatan seperti ini sangat penting untuk meningkatkan kolaborasi dan keterlibatan aktif generasi muda, terutama dalam memahami peran data dan transformasi ekonomi di era digital,” ujar perwakilan dari BI Kediri.

Dalam era digital, data menjadi salah satu aset berharga yang mampu memberikan dampak signifikan terhadap pertumbuhan ekonomi. BI menekankan bahwa akurasi dan validitas data, seperti yang dikumpulkan melalui survei dan liaison, menjadi fondasi penting untuk mendukung analisis ekonomi yang lebih tepat sasaran.

Survei yang dilakukan Bank Indonesia mencakup berbagai aspek seperti harga pangan strategis, penjualan eceran, kegiatan dunia usaha, dan konsumsi. Informasi ini berperan penting dalam memberikan masukan kepada pemerintah daerah, mendukung pengendalian inflasi, serta memperkuat stabilitas ekonomi regional.

“Dengan data yang valid, kami dapat menyusun kebijakan yang lebih efektif dan memberikan peringatan dini terhadap potensi gangguan ekonomi, baik di tingkat daerah maupun nasional,” lanjutnya.

Selain memberikan paparan terkait pentingnya survei dan pengumpulan data, acara ini juga menjadi ajang diskusi dan edukasi bagi para peserta GenBI untuk lebih memahami peran Bank Indonesia dalam menjaga stabilitas ekonomi, termasuk melalui kebijakan moneter, pengaturan sistem pembayaran, dan stabilitas keuangan.

Acara tersebut ditutup dengan sesi tanya jawab interaktif yang mengupas lebih dalam mengenai pentingnya kolaborasi generasi muda dengan Bank Indonesia untuk mendukung transformasi ekonomi dan inovasi di daerah.
`

const DetailNews = () => {
    return (
        <>
            <Head>
                <title>Temu Responden</title>
                <meta name="description" content="Pelajari lebih lanjut tentang Temu Responden Bank Indonesia 2024" />
                <meta name="keywords" content="GENBI UNISKA, Temu Responden Bank Indonesia 2024, Generasi Baru Indonesia, GENBI Universitas Islam Kadiri" />
                <meta name="author" content="GENBI KOMINFO UNISKA" />
                <meta property="og:title" content="GENBI UNISKA - News" />
                <meta property="og:description" content="Kenali lebih dekat GENBI UNISKA yang menjadi mitra Bank Indonesia. Temukan informasi lengkap tentang temu responden bank Indonesia 2024." />
                <meta property="og:image" content="/assets/genbi/logo-genbi-polos.png" />
                <meta property="og:url" content="https://www.genbi-uniska.com/profile" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/assets/genbi/logo-genbi.png" type="image/png" />
            </Head>
            <main>
                <Navbar />
                <section className="w-4/6 mx-auto text-gray-700 pt-28">
                    <h2 className="text-4xl font-bold">Temu Responden 2024, BI Bersama Generasi Baru Universitas Islam Kadiri</h2>
                    <div className="flex gap-6 my-4">
                        <p>Oleh : Abya</p>
                        <p>Editor : Abya</p>
                        <p>Senin, 09 Desember 2024</p>
                        <p>IKCC</p>
                    </div>
                    <div className="flex gap-2 my-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-whatsapp w-9 h-9 p-2 bg-[#25D366] hover:bg-[#7fffae] rounded-md cursor-pointer hover:-translate-y-3 hover:transform hover:transition duration-300 " viewBox="0 0 16 16">
                            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-instagram w-9 h-9 p-2 bg-[#3C5DA1] hover:bg-[#84adff] rounded-md cursor-pointer hover:-translate-y-3 hover:transform hover:transition duration-300 " viewBox="0 0 24 24">
                            <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z">
                            </path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-twitter-x w-9 h-9 p-2.5 bg-black hover:bg-gray-700 rounded-md cursor-pointer hover:-translate-y-3 hover:transform hover:transition duration-300" viewBox="0 0 16 16">
                            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-telegram w-9 h-9 p-2 bg-[#0088CC] hover:bg-[#72d7ff] rounded-md cursor-pointer hover:-translate-y-3 hover:transform hover:transition duration-300" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-share-fill w-9 h-9 p-2.5 bg-[#95D03A] hover:bg-[#aada63] rounded-md cursor-pointer hover:-translate-y-3 hover:transform hover:transition duration-300 " strokeWidth={2} viewBox="0 0 16 16">
                            <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5" />
                        </svg>
                    </div>
                    <div className="w-full">
                        <Image src={"/assets/kegiatan/a.jpeg"} alt="/assets/kegiatan/a.jpeg" width={1000} height={600} className="w-full h-[70vh] mx-auto object-cover object-center rounded-lg" />
                        <p className="border-l-2 border-red-500 italic pl-2 mt-2">
                            Penghargaan dari BI kepada Peserta Temu Responden 2024
                        </p>
                    </div>
                    <main className="grid grid-cols-6">
                        <article className="col-span-4">
                            <p className=" whitespace-pre-line text-justify">{news}</p>
                        </article>
                        <aside className="col-span-2 bg-slate-400 rounded-lg p-4 m-4">
                            <h2 className="text-lg">Berita terbaru</h2>

                        </aside>
                    </main>
                    <h2 className="flex gap-2 items-center h-fit py-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="black" className="bi bi-share-fill " strokeWidth={1} stroke="black" viewBox="0 0 16 16">
                            <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5" />
                        </svg>
                        Bagikan :
                    </h2>
                    <div className="flex gap-2 my-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-whatsapp w-9 h-9 p-2 bg-[#25D366] hover:bg-[#7fffae] rounded-md cursor-pointer hover:-translate-y-3 hover:transform hover:transition duration-300 " viewBox="0 0 16 16">
                            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-instagram w-9 h-9 p-2 bg-[#3C5DA1] hover:bg-[#84adff] rounded-md cursor-pointer hover:-translate-y-3 hover:transform hover:transition duration-300 " viewBox="0 0 24 24">
                            <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z">
                            </path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-twitter-x w-9 h-9 p-2.5 bg-black hover:bg-gray-700 rounded-md cursor-pointer hover:-translate-y-3 hover:transform hover:transition duration-300" viewBox="0 0 16 16">
                            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-telegram w-9 h-9 p-2 bg-[#0088CC] hover:bg-[#72d7ff] rounded-md cursor-pointer hover:-translate-y-3 hover:transform hover:transition duration-300" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-share-fill w-9 h-9 p-2.5 bg-[#95D03A] hover:bg-[#aada63] rounded-md cursor-pointer hover:-translate-y-3 hover:transform hover:transition duration-300 " strokeWidth={2} viewBox="0 0 16 16">
                            <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5" />
                        </svg>
                    </div>
                </section>
                <Footer />
            </main>
        </>
    )
}

export default DetailNews
