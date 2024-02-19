import { NextFunction, Request, Response, Router } from "express";
import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { DB } from '../DB/db';

const trackingRoutes = Router({ mergeParams: true });

trackingRoutes.get('/getQuotes',
    async (request, response, next: NextFunction) => {

        try {
            const db = DB.Connection;
            const data = await db.query<RowDataPacket[]>("select * from Quotes");
            response.json(data[0]);

        } catch (err: any) {
            next(err);
        }

    }
);

trackingRoutes.get('/getQuotesById/:id',
    async (request, response, next: NextFunction) => {

        try {
            const db = DB.Connection;
            const data = await db.query<RowDataPacket[]>("select * from Quotes where id = ?", [request.params.id]);
            response.json(data[0]);

        } catch (err: any) {
            next(err);
        }

    }
);
trackingRoutes.post('/saveQuote', async (request, response) => {

    const db = DB.Connection;
    const formData = request.body;

    try {
        const result = await db.query<ResultSetHeader>("INSERT INTO Quotes SET ?", formData);
        response.json({ message: 'Form data received' });
    }
    catch (err: any) {
        console.error(err);
    }
    response.json({ message: 'Form data received' });
});

export default trackingRoutes
