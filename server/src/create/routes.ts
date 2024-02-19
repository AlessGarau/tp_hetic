import { Router, Request, Response, NextFunction } from "express";

const createQuote = Router({ mergeParams: true });

createQuote.get('/create',
    async (request: Request, response: Response, next: NextFunction) => {
        response.json({
            type: 'create',
        });
    }
);

export default createQuote;