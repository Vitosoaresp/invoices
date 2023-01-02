import express from 'express';

import RouterOrders from './routes/orderRoutes';

const app = express();

app.use(express.json());

app.use('/orders', RouterOrders);

export { app };
