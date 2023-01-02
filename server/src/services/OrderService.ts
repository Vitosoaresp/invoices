import Buyer from '../database/models/BuyerModel';
import Cnpj from '../database/models/CnpjModel';
import Orders from '../database/models/OrderModel';
import Provider from '../database/models/ProviderModel';
import User from '../database/models/UserModel';

import { IOrder } from '../interfaces/IOrder';
import { IService } from '../interfaces/IService';

export default class OrderService implements IService<IOrder> {
  public findAll = async (): Promise<IOrder[]> => {
    return await Orders.findAll({
      include: [
        { model: User, as: 'user' },
        { model: Cnpj, as: 'cnpj' },
        { model: Buyer, as: 'buyer' },
        { model: Provider, as: 'provider' },
      ],
    });
  }
}