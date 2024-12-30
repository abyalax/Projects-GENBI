import query from "@/database/db";

export interface News {
    id: number;
    title: string;
    description: string;
    slug: string;
    content: string;
    category: string;
    image?: string;
    video?: string;
    author: number;
    date: string;
    created_at: string;
    updated_at: string;
    meta_title: string;
    meta_description: string;
    meta_author: string;
    meta_keywords: string;
    meta_image: string;
    meta_url: string
}

export interface NewsDetail extends News {
    author_name: string
}

export const getAllNews = async (): Promise<NewsDetail[]> => {
    const result = await query<(News & { author_name: string })[]>(`
        SELECT news.*, anggota.name AS author_name FROM news INNER JOIN anggota ON news.author = anggota.id`
    );
    return result.map((e) => ({
        ...e,
        date: new Date(e.date).toISOString(),
        created_at: new Date(e.created_at).toISOString(),
        updated_at: new Date(e.updated_at).toISOString(),
    }));
};

export const getNewsByID = async (id: number): Promise<NewsDetail[]> => {
    const result = await query<(News & { author_name: string })[]>(
        `SELECT news.*, anggota.name AS author_name FROM news INNER JOIN anggota ON news.author = anggota.id WHERE news.id = ?;`,
        [id]
    );
    return result.map((e) => ({
        ...e,
        date: new Date(e.date).toISOString(),
        created_at: new Date(e.created_at).toISOString(),
        updated_at: new Date(e.updated_at).toISOString(),
    }));
};


export const getNewsBySlug = async (slug: string): Promise<NewsDetail[]> => {
    const result = await query<NewsDetail[]>(
        `SELECT 
            news.*, 
            anggota.name AS author_name 
        FROM 
            news 
        INNER JOIN 
            anggota 
        ON 
            news.author = anggota.id
        WHERE 
            news.slug = ?;`,
        [slug]
    );
    return result.map((e) => ({
        ...e,
        date: new Date(e.date).toISOString(),
        created_at: new Date(e.created_at).toISOString(),
        updated_at: new Date(e.updated_at).toISOString(),
    }));
};
