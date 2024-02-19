import Express, { NextFunction, Request, Response } from "express";
import { join } from 'path';
import trackingRoutes from "./tracking/routes";
import createQuote from "./create/routes";
import { json } from "body-parser";

const PORT = process.env.PORT || 5050;

const app = Express();
const cors = require('cors');

app.use(cors());
app.use(json());
app.use('/public', Express.static(join('assets')));
app.use(trackingRoutes)
app.use(createQuote)


app.listen(PORT,
    () => {
        console.info(`http://localhost:${PORT}/`);
    }
);