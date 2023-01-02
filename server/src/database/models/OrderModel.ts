import { ForeignKey, InferAttributes, InferCreationAttributes, INTEGER, Model, STRING } from 'sequelize';
import db from '.';

class Orders extends Model<InferAttributes<Orders>, InferCreationAttributes<Orders>> {
  id!: number;
  orderNfId!: string;
  orderNumber!: string;
  orderPath!: string;
  orderFileName!: string;
  orderOriginalName!: string;
  emissionDate!: string;
  pdfFile!: string;
  emitedTo!: string;
  nNf!: string;
  CTE!: string;
  value!: string;
  cnpjId!: ForeignKey<number>;;
  userId!: ForeignKey<number>;
  buyerId!: ForeignKey<number>;;
  providerId!: ForeignKey<number>;;
  orderStatusBuyer!: string;
  orderStatusProvider!: string;
  deliveryReceipt!: string;
  cargoPackingList!: string;
  deliveryCtrc!: string;
}
Orders.init(
  {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    orderNfId: {
      type: STRING,
      allowNull: false,
      unique: true,
    },
    orderNumber: {
      type: STRING,
      allowNull: false,
    },
    orderPath: {
      type: STRING,
      defaultValue: null,
      unique: true,
    },
    orderFileName: {
      type: STRING,
      defaultValue: null,
      unique: true,
    },
    orderOriginalName: {
      type: STRING,
      defaultValue: null,
      unique: true,
    },
    emissionDate: {
      type: STRING,
      defaultValue: null,
    },
    pdfFile: {
      type: STRING,
      defaultValue: null,
    },
    emitedTo: {
      type: STRING,
      allowNull: false,
    },
    nNf: {
      type: STRING,
      defaultValue: null,
    },
    CTE: {
      type: STRING,
      defaultValue: null,
    },
    value: {
      type: STRING,
      defaultValue: null,
    },
    cnpjId: {
      type: INTEGER,
      defaultValue: null,
      references: {
        model: 'cnpjs',
        key: 'id',
      }
    },
    userId: {
      type: INTEGER,
      references: {
        model: 'users',
        key: 'id',
      },
      defaultValue: null,
    },
    buyerId: {
      type: INTEGER,
      defaultValue: null,
      references: {
        model: 'buyers',
        key: 'id',
      }
    },
    providerId: {
      type: INTEGER,
      defaultValue: null,
      references: {
        model: 'providers',
        key: 'id',
      }
    },
    orderStatusBuyer: {
      type: STRING,
      defaultValue: 0,
    },
    orderStatusProvider: {
      type: STRING,
      defaultValue: 0,
    },
    deliveryReceipt: {
      type: STRING,
      defaultValue: null,
    },
    cargoPackingList: {
      type: STRING,
      defaultValue: null,
    },
    deliveryCtrc: {
      type: STRING,
      defaultValue: null,
    }
  },
  {
    underscored: false,
    sequelize: db,
    modelName: 'orders',
    timestamps: true,
  },
);

export default Orders;
