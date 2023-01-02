import { ForeignKey, InferAttributes, InferCreationAttributes, INTEGER, Model, STRING } from 'sequelize';
import db from '.';
import Orders from './OrderModel';

class Provider extends Model<InferAttributes<Provider>, InferCreationAttributes<Provider>>  {
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
  bank!: string;
  bankAgency!: string;
  account!: string;
  documents!: string;
  phoneNumber!: string;
  situation!: string;
  situationDate!: string;
  cnpjId!: ForeignKey<number>;
  email!: string;
}

Provider.init(
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
      defaultValue: null,
    },
    cashforceTax: {
      type: STRING,
      defaultValue: null,
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
    bank: {
      type: STRING,
      defaultValue: null,
    },
    bankAgency: {
      type: STRING,
      defaultValue: null,
    },
    account: {
      type: STRING,
      defaultValue: null,
    },
    documents: {
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
    },
    email: {
      type: STRING,
      defaultValue: null,
    }
  },
  {
    underscored: false,
    sequelize: db,
    modelName: 'providers',
    timestamps: true,
  },
)

Orders.belongsTo(Provider, { foreignKey: 'providerId', as: 'provider' });

Provider.hasMany(Orders, { foreignKey: 'providerId', as: 'orders' });

export default Provider;
