import Image from "next/image";
import Footer from "@/component/footer";
import Navbar from "@/component/navbar";
import { kegiatan } from "@/utils/getter-image";
import Link from "next/link";

export async function getServerSideProps() {
  return {
    props: {},
  };
}

const judul = "Temu Responden dan Seminar 2024"

const article = `
Lorem ipsum dolor sit amet consectetur adipisicing elit.
At perferendis reprehenderit earum sequi cum placeat tenetur provident, vel,
tempore quod nulla possimus unde culpa iusto maiores consequatur, quas illo ex.
Lorem ipsum dolor sit amet consectetur adipisicing elit.
At perferendis reprehenderit earum sequi cum placeat tenetur provident, vel,
tempore quod nulla possimus unde culpa iusto maiores consequatur, quas illo ex.
Lorem ipsum dolor sit amet consectetur adipisicing elit.
At perferendis reprehenderit earum sequi cum placeat tenetur provident, vel,
tempore quod nulla possimus unde culpa iusto maiores consequatur, quas illo ex.
Lorem ipsum dolor sit amet consectetur adipisicing elit.
At perferendis reprehenderit earum sequi cum placeat tenetur provident, vel,
tempore quod nulla possimus unde culpa iusto maiores consequatur, quas illo ex.`

const NewsPage = () => {
  return (
    <main className="w-full bg-[#edf0f7] min-h-screen">
      <Navbar />

      <div className="relative pt-24 pb-2 ml:mx-32 sm:mx-12 xs:mx-8 xxs:mx-4 mx-2 border-b-2 border-slate-500">
        <h2 className="ml:text-3xl md:text-2xl sm:text-xl text-lg font-semibold text-center ml:mb-3">
          News
        </h2>
        <p className="text-gray-500 text-center sm:text-base xs:text-sm text-xs">
          Follow the latest developments in GenBI UNISKA and get the latest information about our activities, programs and achievements.
        </p>
      </div>

      <section className="fixed top-24 right-5">
        <div className="relative">
          <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 24 24" className="bi bi-search cursor-pointer ml-5">
            <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z">
            </path><path d="M11.412 8.586c.379.38.588.882.588 1.414h2a3.977 3.977 0 0 0-1.174-2.828c-1.514-1.512-4.139-1.512-5.652 0l1.412 1.416c.76-.758 2.07-.756 2.826-.002z">
            </path>
          </svg>
          <p className="ml:block hidden text-slate-500 text-center">Search News...</p>

          <div className="absolute top-3 right-32 w-80 hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="bi bi-search cursor-pointer absolute top-1">
              <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z">
              </path><path d="M11.412 8.586c.379.38.588.882.588 1.414h2a3.977 3.977 0 0 0-1.174-2.828c-1.514-1.512-4.139-1.512-5.652 0l1.412 1.416c.76-.758 2.07-.756 2.826-.002z">
              </path>
            </svg>
            <input type="text" placeholder="Search News Here..." className="border border-gray-400 bg-[#edf0f7] w-full h-full py-2 pl-12 focus:outline-none focus:ring-1 focus:ring-[#1C8383] rounded-lg" />
          </div>
        </div>

      </section>

      <section>
        <div className="flex flex-col ml:gap-14 sm:gap-8 xs:gap-6 gap-4 justify-center items-start ml:px-32 sm:px-16 px-8 pt-6">

          <div className="ml:flex ml:flex-row flex flex-col ml:gap-6 gap-4 mx-auto">
            <Image src={kegiatan.temuResponden[1]} alt="temu responden" width={1000} height={800} className="ml:h-64 ml:w-64 sm:h-52 w-full h-32 mx-auto object-center object-cover rounded" />

            <div className="flex flex-col">
              <div className="flex justify-between items-start ml:pr-6">
                  <h2 className="ml:text-2xl sm:text-lg text-sm font-bold font-serif text-gray-700 mb-4 ml:mt-2">
                    {judul.length <= 33 ? judul : judul.slice(0, 33) + '...'}
                    <Link href={""} className="block ml:hidden hover:text-blue-500 text-gray-500 text-xs sm:text-sm font-normal">Baca Selengkapnya...</Link>
                  </h2>
                <p className="sm:text-base sm:block hidden text-xs text-gray-500 text-nowrap">09 Desember 2024</p>
              </div>

              <p className="hidden ml:block text-gray-700 mb-4 ml:mt-2 text-justify ml:h-fit ml:overflow-visible h-52 overflow-hidden">
                {article.slice(0, 400) + '.......'}
              </p>
              <button className="hidden ml:block sm:text-base text-xs bg-slate-500 hover:bg-slate-600 text-white py-2 px-4 w-fit rounded">
                Baca Selengkapnya
              </button>
            </div>
          </div>
          <div className="ml:flex ml:flex-row flex flex-col ml:gap-6 gap-4 mx-auto">
            <Image src={kegiatan.temuResponden[1]} alt="temu responden" width={1000} height={800} className="ml:h-64 ml:w-64 sm:h-52 w-full h-32 mx-auto object-center object-cover rounded" />

            <div className="flex flex-col">
              <div className="flex justify-between items-start ml:pr-6">
                  <h2 className="ml:text-2xl sm:text-lg text-sm font-bold font-serif text-gray-700 mb-4 ml:mt-2">
                    Temu Responden dan Seminar 2024
                    <Link href={""} className="block ml:hidden hover:text-blue-500 text-gray-500 text-xs sm:text-sm font-normal">Baca Selengkapnya...</Link>
                  </h2>
                <p className="sm:text-base sm:block hidden text-xs text-gray-500 text-nowrap">09 Desember 2024</p>
              </div>

              <p className="hidden ml:block text-gray-700 mb-4 ml:mt-2 text-justify ml:h-fit ml:overflow-visible h-52 overflow-hidden">
                {article.slice(0, 400) + '.......'}
              </p>
              <button className="hidden ml:block sm:text-base text-xs bg-slate-500 hover:bg-slate-600 text-white py-2 px-4 w-fit rounded">
                Baca Selengkapnya
              </button>
            </div>
          </div>
          <div className="ml:flex ml:flex-row flex flex-col ml:gap-6 gap-4 mx-auto">
            <Image src={kegiatan.temuResponden[1]} alt="temu responden" width={1000} height={800} className="ml:h-64 ml:w-64 sm:h-52 w-full h-32 mx-auto object-center object-cover rounded" />

            <div className="flex flex-col">
              <div className="flex justify-between items-start ml:pr-6">
                  <h2 className="ml:text-2xl sm:text-lg text-sm font-bold font-serif text-gray-700 mb-4 ml:mt-2">
                    Temu Responden dan Seminar 2024
                    <Link href={""} className="block ml:hidden hover:text-blue-500 text-gray-500 text-xs sm:text-sm font-normal">Baca Selengkapnya...</Link>
                  </h2>
                <p className="sm:text-base sm:block hidden text-xs text-gray-500 text-nowrap">09 Desember 2024</p>
              </div>

              <p className="hidden ml:block text-gray-700 mb-4 ml:mt-2 text-justify ml:h-fit ml:overflow-visible h-52 overflow-hidden">
                {article.slice(0, 400) + '.......'}
              </p>
              <button className="hidden ml:block sm:text-base text-xs bg-slate-500 hover:bg-slate-600 text-white py-2 px-4 w-fit rounded">
                Baca Selengkapnya
              </button>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
};

export default NewsPage