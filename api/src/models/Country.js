const { DataTypes, Sequelize } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      

    },
    idL: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
      
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flag:{
      type: DataTypes.STRING,
      allowNull: false,
    }, 
    continent:{
      type :DataTypes.STRING,
      allowNull: false,
    },
    capital:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    subregion:{
      type: DataTypes.STRING,
    },
    area:{
      type: DataTypes.FLOAT
    },
    population:{
      type: DataTypes.INTEGER
    }
  },
  {timestamps: false,}
  );
  
};

