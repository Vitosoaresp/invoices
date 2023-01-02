import { Router } from 'express';

import OrderController from '../controllers/OrderController';
import OrderService from '../services/OrderService';

const router = Router();

const orderService = new OrderService();
const orderController = new OrderController(orderService);

router.get('/', (req, res) => orderController.read(req, res));

export default router;
