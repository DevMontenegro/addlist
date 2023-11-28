
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Lista extends Model {}
Lista.init(
  {
    descricao: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Lista',
    timestamps: false,
  }
);

module.exports = Lista;
