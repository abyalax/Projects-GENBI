import query from '@/database/db';
import { News } from '@/services/news';
import { responseAPI, responseMethodNotAllowed } from '@/utils/response';
import { NextApiRequest, NextApiResponse } from 'next';

export const config = {
    api: {
        bodyParser: true,
    },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const news: News = req.body;
        const { title, description, slug, content, image, created_at, updated_at, date, author, meta_title, meta_description, meta_keywords, meta_author, meta_image, meta_url, video, category } = news;

        console.log({ date, created_at, updated_at });
        console.log(news);

        const dateObj = new Date(date);
        const createdAtObj = new Date(created_at);
        const updatedAtObj = new Date(updated_at);

        console.log({ dateObj })
        console.log({ createdAtObj })
        console.log({ updatedAtObj })

        if (isNaN(dateObj.getTime())) {
            return responseAPI(res, false, 400, 'Invalid date');
        }
        if (isNaN(createdAtObj.getTime())) {
            return responseAPI(res, false, 400, 'Invalid created_at');
        }
        if (isNaN(updatedAtObj.getTime())) {
            return responseAPI(res, false, 400, 'Invalid updated_at');
        }

        const dateSQL = dateObj.toISOString().slice(0, 19).replace('T', ' ');
        const created_atSQL = createdAtObj.toISOString().slice(0, 19).replace('T', ' ');
        const updated_atSQL = updatedAtObj.toISOString().slice(0, 19).replace('T', ' ');

        if (!image || typeof image !== 'string' || !image.startsWith('http')) {
            return responseAPI(res, false, 400, 'Invalid image URL');
        }

        try {
            const data = await query(
                `INSERT INTO news 
                (title, description, slug, content, image, created_at, updated_at, date, author, meta_title, meta_description, meta_keywords, meta_author, meta_image, meta_url, video, category) 
                VALUES 
                (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`,
                [title, description, slug, content, image, created_atSQL, updated_atSQL, dateSQL, author, meta_title, meta_description, meta_keywords, meta_author, meta_image, meta_url, video, category]
            );
            console.log("Success Upload Data", data);
            return responseAPI(res, true, 200, 'News entry created successfully');
        } catch (error) {
            console.error('Database Error:', error);
            return responseAPI(res, false, 500, 'Failed to create news entry');
        }
    }
    else if (req.method === 'PUT') {
        const news: News = req.body;
        const { title, description, slug, content, image, created_at, updated_at, date, author, meta_title, meta_description, meta_keywords, meta_author, meta_image, meta_url, video, category, id } = news;

        console.log({ date, created_at, updated_at });
        console.log(news);

        const dateObj = new Date(date);
        const createdAtObj = new Date(created_at);
        const updatedAtObj = new Date(updated_at);

        console.log({ dateObj })
        console.log({ createdAtObj })
        console.log({ updatedAtObj })

        if (isNaN(dateObj.getTime())) {
            return responseAPI(res, false, 400, 'Invalid date');
        }
        if (isNaN(createdAtObj.getTime())) {
            return responseAPI(res, false, 400, 'Invalid created_at');
        }
        if (isNaN(updatedAtObj.getTime())) {
            return responseAPI(res, false, 400, 'Invalid updated_at');
        }

        const dateSQL = dateObj.toISOString().slice(0, 19).replace('T', ' ');
        const created_atSQL = createdAtObj.toISOString().slice(0, 19).replace('T', ' ');
        const updated_atSQL = updatedAtObj.toISOString().slice(0, 19).replace('T', ' ');

        if (!image || typeof image !== 'string' || !image.startsWith('http')) {
            return responseAPI(res, false, 400, 'Invalid image URL');
        }

        try {
            const data = await query(
                `UPDATE news SET 
                title = ?, 
                description = ?, 
                slug= ?, 
                content = ?, 
                image = ?, 
                created_at = ?, 
                updated_at = ?, 
                date = ?, 
                author = ?, 
                meta_title = ?, 
                meta_description = ?, 
                meta_keywords = ?, 
                meta_author = ?, 
                meta_image = ?, 
                meta_url = ?, 
                video = ?, 
                category = ?
                WHERE id = ?;`,

                [title, description, slug, content, image, created_atSQL, updated_atSQL, dateSQL, author, meta_title, meta_description, meta_keywords, meta_author, meta_image, meta_url, video, category, id]
            );
            console.log("Success Upload Data", data);
            return responseAPI(res, true, 200, 'News entry created successfully');
        } catch (error) {
            console.error('Database Error:', error);
            return responseAPI(res, false, 500, 'Failed to create news entry');
        }
    } else {
        return responseMethodNotAllowed(res);
    }
}


