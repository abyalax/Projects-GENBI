
import { genBI } from "@/utils/getter-image";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
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
  )
};

export default Navbar;