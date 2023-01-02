import chai from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';

import { app } from '../../app';
import OrderModel from '../../database/models/OrderModel';
import { ordersMock } from '../mock/orderMock';

const { expect } = chai;
chai.use(chaiHttp);

describe('Test order endpoints', () => {
  beforeEach(() => {
    sinon.stub(OrderModel, 'findAll').resolves(ordersMock as any)
  });

  afterEach(() => {
    sinon.restore();
  });

  describe('GET /orders', () => {
    it('should return all orders', async () => {
      const res = await chai.request(app).get('/orders');
      expect(res.status).to.equal(200);
      expect(res.body).to.be.an('array');
      expect(res.body).to.be.deep.equal(ordersMock);
    });
  });
});