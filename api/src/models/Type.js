const sequelize = require('sequelize');
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('type', {
    name: {
      type: DataTypes.STRING,
      allownull: false
    }
  }, {
    timestamps: false
  });
};