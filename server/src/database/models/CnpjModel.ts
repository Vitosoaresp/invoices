import { InferAttributes, InferCreationAttributes, INTEGER, Model, STRING } from 'sequelize';
import db from '.';
import Orders from './OrderModel';

class Cnpj extends Model<InferAttributes<Cnpj>, InferCreationAttributes<Cnpj>>  {
  id!: number;
  cnpj!: string;
  companyType!: string;
}

Cnpj.init(
  {
    id: {
      type: INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    cnpj: {
      type: STRING,
      allowNull: false,
      unique: true,
    },
    companyType: {
      type: STRING,
      allowNull: false,
    }
  },
  {
    underscored: false,
    sequelize: db,
    modelName: 'cnpjs',
    timestamps: true,
  },
)

Orders.belongsTo(Cnpj, { foreignKey: 'cnpjId', as: 'cnpj' });

Cnpj.hasMany(Orders, { foreignKey: 'cnpjId', as: 'orders' });

export default Cnpj;
