import { InferAttributes, InferCreationAttributes, INTEGER, Model, STRING, TINYINT } from 'sequelize';
import db from '.';
import Orders from './OrderModel';

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>>  {
  id!: number;
  name!: string;
  email!: string;
  phoneNumber!: string;
  mobile!: string;
  departament!: string;
  verificationCode!: string;
  emailChecked!: number;
  cashforceAdm!: number;
}
User.init(
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
      unique: true,
    },
    email: {
      type: STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: STRING,
      defaultValue: null,
    },
    mobile: {
      type: STRING,
      defaultValue: null,
    },
    departament: {
      type: STRING,
      defaultValue: null,
    },
    verificationCode: {
      type: STRING,
      defaultValue: null,
    },
    emailChecked: {
      type: TINYINT,
      defaultValue: 0,
    },
    cashforceAdm: {
      type: TINYINT,
      defaultValue: 0,
    },
  },
  {
    underscored: false,
    sequelize: db,
    modelName: 'users',
    timestamps: true,
  },
);

Orders.belongsTo(User, { foreignKey: 'userId', as: 'user' });

User.hasMany(Orders, { foreignKey: 'userId', as: 'orders' });

export default User;