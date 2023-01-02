import { Request, Response } from 'express';
import { IOrder } from '../interfaces/IOrder';
import { IService } from '../interfaces/IService';

export default class OrderController {
  constructor (private _orderService: IService<IOrder>) {}

  public async read(_req: Request, res: Response) {
    try {
      const orders = await this._orderService.findAll();
      return res.status(200).json(orders);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }
}