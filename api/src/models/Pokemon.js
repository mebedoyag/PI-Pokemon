const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

// const pokeData = { name, typeNames, height, id, weight };

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    // typeOne: {
    //   type: DataTypes.INTEGER,
    //   // allowNull: false,
    // },
    // typeTwo: {
    //   type: DataTypes.INTEGER,
    // },
    height: {
      type: DataTypes.INTEGER,
      defaultValue: 10
    },
    weight: {
      type: DataTypes.INTEGER,
      defaultValue: 10,
    },
    life: {
      type: DataTypes.INTEGER,
      defaultValue: 10
    },
    attack: {
      type: DataTypes.INTEGER,
      defaultValue: 10,
    },
    defense: {
      type: DataTypes.INTEGER,
      defaultValue: 10,
    },
    speed: {
      type: DataTypes.INTEGER,
      defaultValue: 10,
    },
    imgUrl: {
      type: DataTypes.STRING
    }
  }, {
    timestamps: false
  });
};
