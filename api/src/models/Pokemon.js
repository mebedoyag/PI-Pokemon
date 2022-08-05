const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

// const pokeData = { name, typeNames, height, id, weight };

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    typeOne: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    typeTwo: {
      type: DataTypes.STRING,
    },
    height: {
      type: DataTypes.INTEGER,
      defaultValue: 10
    },
    weight: {
      type: DataTypes.INTEGER,
      defaultValue: 10,
    }
  }, {
    timestamps: false
  });
};
