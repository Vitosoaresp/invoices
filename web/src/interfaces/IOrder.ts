export interface IOrder {
  orderNfId: string;
    createdAt: string;
    buyer: {
      name: string;
    };
    provider: {
      name: string;
    };
    value: string;
    orderStatusBuyer: string;
}
