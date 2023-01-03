import cors from 'cors';
import express from 'express';

import RouterOrders from './routes/orderRoutes';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/orders', RouterOrders);

export { app };
