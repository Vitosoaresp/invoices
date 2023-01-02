import { ForeignKey, InferAttributes, InferCreationAttributes, INTEGER, Model, STRING, TINYINT } from 'sequelize';
import db from '.';
import Orders from './OrderModel';

class Buyer extends Model<InferAttributes<Buyer>, InferCreationAttributes<Buyer>>  {
  id!: number;
  name!: string;
  tradingName!: string;
  cashforceTax!: string;
  responsibleName!: string;
  responsibleEmail!: string;
  responsiblePosition!: string;
  responsiblePhone!: string;
  responsibleMobile!: string;
  website!: string;
  postalCode!: string;
  address!: string;
  number!: string;
  complement!: string;
  neighborhood!: string;
  city!: string;
  state!: string;
  phoneNumber!: string;
  situation!: string;
  situationDate!: string;
  cnpjId!: ForeignKey<number>;
  confirm!: number;
  email!: string;
}

Buyer.init(
  {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: STRING,
      allowNull: false,
    },
    tradingName: {
      type: STRING,
      defaultValue: null
    },
    cashforceTax: {
      type: STRING,
      allowNull: false,
    },
    responsibleName: {
      type: STRING,
      defaultValue: null,
    },
    responsibleEmail: {
      type: STRING,
      defaultValue: null,
    },
    responsiblePosition: {
      type: STRING,
      defaultValue: null,
    },
    responsiblePhone: {
      type: STRING,
      defaultValue: null,
    },
    responsibleMobile: {
      type: STRING,
      defaultValue: null,
    },
    website: {
      type: STRING,
      defaultValue: null,
    },
    postalCode: {
      type: STRING,
      defaultValue: null,
    },
    address: {
      type: STRING,
      defaultValue: null,
    },
    number: {
      type: STRING,
      defaultValue: null,
    },
    complement: {
      type: STRING,
      defaultValue: null,
    },
    neighborhood: {
      type: STRING,
      defaultValue: null,
    },
    city: {
      type: STRING,
      defaultValue: null,
    },
    state: {
      type: STRING,
      defaultValue: null,
    },
    phoneNumber: {
      type: STRING,
      defaultValue: null,
    },
    situation: {
      type: STRING,
      defaultValue: null,
    },
    situationDate: {
      type: STRING,
      defaultValue: null,
    },
    cnpjId: {
      type: INTEGER,
      defaultValue: null,
      references: {
        model: 'cnpjs',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    confirm: {
      type: TINYINT,
      defaultValue: 1,
    },
    email: {
      type: STRING,
      defaultValue: null,
    }
  },
  {
    underscored: false,
    sequelize: db,
    modelName: 'buyers',
    timestamps: true,
  },
)

Orders.belongsTo(Buyer, { foreignKey: 'buyerId', as: 'buyer' });

Buyer.hasMany(Orders, { foreignKey: 'buyerId', as: 'orders' });

export default Buyer;
