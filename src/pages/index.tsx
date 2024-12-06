import Image from "next/image";
import { Inter } from "next/font/google";
import { genBI, homepage, random, rapat, uniska } from "@/utils/getter-image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default function Home() {
  return (
    <main className={`bg-[#edf0f7] text-gray-700 min-h-screen ${inter.className}`}>

      <header>
        <nav className="fixed z-20 top-0 bg-[#1C8383] text-white w-full py-2 px-12">
          <div className="flex justify-around items-center">

            <div className="w-16 flex gap-4">
              <Image src={genBI} alt="GenBI" width={100} height={100} />
              <h2 className="text-nowrap text-lg font-semibold my-auto">GENBI UNISKA</h2>
            </div>

            <div className="text-center">
              <ul className="flex space-x-4">
                <li className="cursor-pointer hover:font-bold">
                  <Link href={"/"}>Beranda</Link>
                </li>
                <li className="cursor-pointer hover:font-bold">
                  <Link href={"/profile"}>Profile</Link>
                </li>
                <li className="cursor-pointer hover:font-bold">
                  <Link href={"/gallery"}>Gallery</Link>
                </li>
                <li className="cursor-pointer hover:font-bold">
                  <Link href={"/news"}>News</Link>
                </li>
                <li className="cursor-pointer hover:font-bold">
                  <Link href={"/blog"}>Blog</Link>
                </li>
                <li className="cursor-pointer hover:font-bold">
                  <Link href={"/agenda"}>Agenda</Link>
                </li>
                <li className="cursor-pointer hover:font-bold">Lainnya</li>
              </ul>
            </div>

            <div className="">
              <button className="text-[#1C8383] bg-white px-4 py-2 rounded-md font-semibold hover:font-bold">
                Hubungi Kami
              </button>
            </div>

          </div>
        </nav>
      </header>

      <section className="text-gray-700 my-12 text-center pt-20">
        <h2 className=" text-2xl font-semibold w-1/2 mx-auto mb-1">
          Selamat datang di website GENBI UNISKA Kediri
        </h2>
        <h2 className=" text-xl font-semibold w-1/2 mx-auto mb-4">
          Shalom, Om Swastiastu, Namo Buddhaya
        </h2>
        <p className="text-slate-600 w-1/3 mx-auto">
          Generasi Baru Indonesia (GenBI) adalah komunitas mahasiswa penerima
          beasiswa Bank Indonesia yang tersebar di seluruh Indonesia.
        </p>
      </section>

      <section>
        <div className="flex justify-center relative">
          <Image src={homepage} alt="Homepage" width={1000} height={1000} className="w-3/4 h-[50vh] rounded-xl object-cover object-center" />
          <span className="absolute text-gray-800 text-3xl font-semibold z-10 top-14">Bisa diganti dengan foto kita</span>
        </div>
      </section>

      <h2 className="text-3xl font-semibold text-[#1C8383] text-center my-12">Singkat tentang kita</h2>

      <section className="grid grid-cols-2 gap-6 text-gray-800 px-32">
        <div className="col-span-1 flex gap-1">
          <Image src={rapat} alt="Rapat" width={600} className="w-2/3 rounded object-cover object-center" />
          <Image src={random.a} alt="Rapat" width={800} className="w-1/3 rounded object-cover object-center" />
        </div>
        <div className="col-span-1">
          <h2 className="text-2xl font-semibold mb-4">Kami adalah Generasi Baru Indonesia Universitas Islam Kadiri-Kediri</h2>
          <p className="text-justify">
            Generasi Baru Indonesia (GenBi) adalah komunitas mahasiswa penerima
            beasiswa Bank Indonesia yang didirikan pada 11 November 2011.
            GenBi berperan sebagai Frontliners Bank Indonesia, berfokus pada
            pemberdayaan masyarakat untuk pembangunan berkelanjutan.
            GenBi aktif di tingkat kampus, regional, dan nasional.
            Universitas Islam Kadiri-Kediri (UNISKA) menjadi mitra dalam program ini mulai tahun 2024.
            GenBi UNISKA telah merencanakan berbagai program yang bermanfaat bagi masyarakat,
            mengembangkan kepekaan sosial, softskill, hardskill, dan jiwa kepemimpinan
            anggotanya untuk menciptakan pemimpin masa depan.
          </p>
        </div>
      </section>

      <h2 className="text-3xl font-semibold text-[#1C8383] text-center mt-12">Divisi GENBI</h2>
      <h2 className="text-3xl font-semibold text-[#1C8383] text-center my-2">Universitas Islam Kadiri-Kediri</h2>
      <p className="text-center mb-12 font-semibold">Periode 2024/2025</p>

      <section className="flex gap-5 px-32">
        <div className="flex flex-col gap-3 justify-center items-center rounded-lg p-4 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#4B5563" width="100" height="100" viewBox="0 0 24 24">
            <path d="M2 8v11.529S6.621 19.357 12 22c5.379-2.643 10-2.471 10-2.471V8s-5.454 0-10 2.471C7.454 8 2 8 2 8z">
            </path><circle cx="12" cy="5" r="3"></circle>
          </svg>
          <p className="font-semibold">Pendidikan</p>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center rounded-lg p-4 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#4B5563" width="100" height="100" className="bi bi-briefcase-fill" viewBox="0 0 16 16">
            <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5" />
            <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85z" />
          </svg>
          <p className="font-semibold">Kewirausahaan</p>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center rounded-lg p-4 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#4B5563" width="100" height="100" viewBox="0 0 24 24">
            <path d="m22 3.41-.12-1.26-1.2.4a13.84 13.84 0 0 1-6.41.64 11.87 11.87 0 0 0-6.68.9A7.23 7.23 0 0 0 3.3 9.5a9 9 0 0 0 .39 4.58 16.6 16.6 0 
            0 1 1.18-2.2 9.85 9.85 0 0 1 4.07-3.43 11.16 11.16 0 0 1 5.06-1A12.08 12.08 0 0 0 9.34 9.2a9.48 9.48 0 0 0-1.86 1.53 11.38 11.38 0 0 0-1.39
            1.91 16.39 16.39 0 0 0-1.57 4.54A26.42 26.42 0 0 0 4 22h2a30.69 30.69 0 0 1 .59-4.32 9.25 9.25 0 0 0 4.52 1.11 11 11 0 0 0 4.28-.87C23 14.67 22 3.86 22 3.41z"></path>
          </svg>
          <p className="font-semibold">Lingkungan Hidup</p>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center rounded-lg p-4 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#4B5563" width="100" height="100" className="bi bi-info-circle-fill" viewBox="0 0 16 16">
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
          </svg>
          <p className="font-semibold">Kominfo</p>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center rounded-lg p-4 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#4B5563" width="100" height="100" className="bi bi-people-fill" viewBox="0 0 16 16">
            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
          </svg>
          <p className="font-semibold">Kemasyarakatan</p>
        </div>
      </section>

      <h2 className="text-3xl font-semibold text-[#1C8383] text-center my-12">Tentang GenBI UNISKA</h2>

      <section className="mb-16">
        <div className="flex justify-center items-center gap-10 px-28">

          <div className="w-1/2">
            <div className="relative h-[500px] bg-gradient-to-r from-[#1C8383] to-green-50 rounded-custom pl-12 pr-2 pt-10">

              <div className="absolute min-h-44 min-w-44 top-12 left-24 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full shadow-2xl flex flex-col justify-center items-center">
                <h2 className="text-5xl font-semibold font-mono">2024</h2>
                <p>GENBI UNISKA</p>
              </div>

              <div className="relative bg-[#1C8383] w-full ">
                <Image alt="Uniska" src={uniska.fotbar} width={800} height={500} className="absolute w-full rounded-custom" />
              </div>

            </div>
          </div>

          <div className="w-1/2 flex flex-col gap-5 ">
            <h2 className="text-2xl font-bold text-[#1C8383]">Who We Are</h2>
            <h2 className="text-5xl font-bold font-serif">Our Vision</h2>
            <p>
              Terwujudnya geneari baru Indonesia yang aktif, responsif, dan
              konstruktif dalam gerakan, pengabdian, pelayanan serta
              pengembangan minat dan bakat mahasiswa untuk GENBI UNISKA dan Indonesia.
            </p>
            <h2 className="text-5xl font-bold font-serif">Our Mission</h2>
            <ul>
              <li className="flex gap-2 justify-center items-start  ">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" strokeWidth={2} stroke="2" height="28" fill="#1C8383" className="bi bi-check-lg" viewBox="0 0 14 14">
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                </svg>
                Memberikan pelayanan terbaik dan manfaat berkelanjutan dalam rangka pemenuhan kebutuhan dan hajat hidup mahasiswa FEB UI.
              </li>
              <li className="flex gap-2 justify-center items-start  ">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" strokeWidth={2} stroke="2" height="28" fill="#1C8383" className="bi bi-check-lg" viewBox="0 0 14 14">
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                </svg>
                Mewadahi dan memfasilitasi pengembangan minat-bakat serta meningkatkan prestasi mahasiswa FEB UI.
              </li>
              <li className="flex gap-2 justify-center items-start  ">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" strokeWidth={2} stroke="2" height="28" fill="#1C8383" className="bi bi-check-lg" viewBox="0 0 14 14">
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                </svg>
                Menciptakan, mengembangkan, dan menyebarkan nilai-nilai inklusivitas gerakan pengabdian mahasiswa FEB UI untuk Indonesia.
              </li>
              <li className="flex gap-2 justify-center items-start  ">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" strokeWidth={2} stroke="2" height="28" fill="#1C8383" className="bi bi-check-lg" viewBox="0 0 14 14">
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                </svg>
                Menanamkan akar nilai dan budaya BEM FEB UI serta memberikan nilai tambah yang optimal kepada seluruh fungsionaris.
              </li>
            </ul>

          </div>
        </div>
      </section>

      <h2 className="text-3xl font-semibold text-[#1C8383] text-center my-12">Hubungi Kami</h2>


      <section>
        <div className="flex justify-center items-start gap-10 px-28">

          <div className="w-1/2 flex flex-col">
            <h2 className="font-bold text-3xl text-[#1C8383] mb-4">Reach Us</h2>
            <p className="text-lg font-semibold">GENBI</p>
            <p className="text-lg font-semibold mb-4">Universitas Islam Kadiri-Kediri</p>
            <p>
              Jl. Sersan Suharmaji No.38, Manisrenggo, Kec. Kota, Kota Kediri, Jawa Timur 64128
            </p>
          </div>

          <form className="w-1/2">
            <h2 className="text-xl font-semibold mb-4">Send Message</h2>

            <label htmlFor="name">Nama</label>
            <input type="text" name="name" placeholder="Masukkan Nama" className="border border-gray-400 mb-4 w-full p-3 focus:outline-none focus:ring-1 focus:ring-blue-500 rounded-lg" />

            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="Masukkan Email" className="border border-gray-400 mb-4 w-full p-3 focus:outline-none focus:ring-1 focus:ring-blue-500 rounded-lg" />

            <label htmlFor="pesan">Pesan</label>
            <textarea name="pesan" placeholder="Ask anything about GENBI UNISKA" className="border border-gray-400 mb-4 w-full p-3 focus:outline-none focus:ring-1 focus:ring-blue-500 rounded-lg" />

            <div className="w-full flex justify-end items-end">
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white w-fit py-2 px-6 rounded-xl my-3 font-semibold text-lg disabled:cursor-not-allowed disabled:bg-gray-500">
                Kirim
              </button>
            </div>

          </form>

        </div>
      </section>

      <footer className="py-14 bg-[#1B6060] mt-60 flex flex-col justify-center items-center text-white">
        <p>Copyright 2024 © Univeritas Islam Kadiri</p>
        <p>Made by Abya</p>
      </footer>

    </main>
  );
}
