import query from "@/database/db";

export interface Divisi {
    id: number;
    name: string;
    leader: string;
    visi: string | null;
    misi: string | null;
}

export const getAllDivisi = async (): Promise<Divisi[]> => {
    const result = await query<Divisi[]>("SELECT * FROM divisi");
    return result;
};
