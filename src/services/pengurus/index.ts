import { getDivisiKewirausahaan, getDivisiLingkungan, getDivisiPendidikan, getDivisiPengabdian } from './../anggota/index';
import { Anggota, getBendahara, getDivisiInternasionalisasi, getDivisiKominfo, getKetua, getSekretaris, getWakilKetua } from "../anggota";

export interface Kepengurusan {
    ketua: Anggota[];
    wakilKetua: Anggota[];
    sekretaris: Anggota[];
    bendahara: Anggota[];
}

export interface BPH {
    kominfo: Anggota[];
    internasionalisasi: Anggota[];
    pendidikan: Anggota[];
    lingkungan: Anggota[];
    pengabdian: Anggota[];
    kewirausahaan: Anggota[];
}

export const getKepengurusan: () => Promise<Kepengurusan> = async () => {
    const ketua = await getKetua();
    const wakilKetua = await getWakilKetua();
    const sekretaris = await getSekretaris();
    const bendahara = await getBendahara();
    const data = {
        ketua,
        wakilKetua,
        sekretaris,
        bendahara,
    }
    return data
}

export const getBPH: () => Promise<BPH> = async () => {
    const kominfo = await getDivisiKominfo()
    const internasionalisasi = await getDivisiInternasionalisasi()
    const pendidikan = await getDivisiPendidikan();
    const lingkungan = await getDivisiLingkungan();
    const pengabdian = await getDivisiPengabdian();
    const kewirausahaan = await getDivisiKewirausahaan()

    const data = { kominfo, internasionalisasi, pendidikan, lingkungan, pengabdian, kewirausahaan }
    return data
}