import { env } from 'process';
import mysql, { ConnectionOptions } from 'mysql2';

const access: ConnectionOptions = {
    host: env.DATABASE_HOST,
    user: env.DATABASE_USER,
    database: env.DATABASE_NAME,
    password: env.DATABASE_PASSWORD,
    port: 3306,
};

const db = mysql.createConnection(access);

const query = <T>(query: string, params?: any[]): Promise<T> => {
    return new Promise((resolve, reject) => {
        db.query(query, params, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result as T);
            }
        });
    });
};

export default query;