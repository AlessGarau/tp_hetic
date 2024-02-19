import mysql, { Pool } from 'mysql2/promise';

export class DB {

    private static POOL: Pool;

    static get Connection(): Pool {
        if (!this.POOL) {
            this.POOL = mysql.createPool({
                host: process.env.DB_HOST || 'dbms',
                user: process.env.DB_USER || 'api-dev',
                database: process.env.DB_DATABASE || 'db_tp',
                password: process.env.DB_PASSWORD || 'rootpassword',
            });
        }

        return this.POOL;
    }

}