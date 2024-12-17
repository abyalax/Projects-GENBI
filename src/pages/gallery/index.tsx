import Image from "next/image";
import Footer from "@/component/footer";
import Navbar from "@/component/navbar";
import { kegiatan } from "@/utils/getter-image";

export async function getServerSideProps() {
  return {
    props: {},
  };
}

const GalleryPage = () => {
  return (
    <main className="w-full bg-[#edf0f7] min-h-screen">
      <Navbar />
      <div className="pt-24 pb-6 ml:mx-32 sm:mx-24 xs:mx-8 xxs:mx-4 mx-2 text-center border-b-2 border-slate-500">

        <h2 className="ml:text-3xl md:text-2xl sm:text-xl text-lg font-semibold mb-3">
          Gallery
        </h2>

        <p className="text-gray-500">
          Find various interesting photos and videos from GenBI UNISKA activities on this page.
        </p>

      </div>

      <section>
        <div className="flex flex-wrap md:gap-14 sm:gap-12 xxs:gap-8 gap-8 justify-center items-start ml:px-20 md:px-14 sm:px-12 xxs:px-8 px-2 pt-6">
          <div className="h-52 w-80">
            <Image src={kegiatan.temuResponden[1]} alt="" width={500} height={500} className="w-full h-full object-center object-cover rounded"/>
            <p className="text-center text-gray-700 mb-4 mt-2">Temu Responden dan Seminar 2024</p>
          </div>
          <div className="h-52 w-80 p-4 rounded-lg bg-slate-400">gallery 2</div>
          <div className="h-52 w-80 p-4 rounded-lg bg-slate-400">gallery 3</div>
          <div className="h-52 w-80 p-4 rounded-lg bg-slate-400">gallery 4</div>
          <div className="h-52 w-80 p-4 rounded-lg bg-slate-400">gallery 5</div>
          <div className="h-52 w-80 p-4 rounded-lg bg-slate-400">gallery 6</div>
        </div>
      </section>
      <Footer />
    </main>
  )
};

export default GalleryPage;