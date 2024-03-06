import { db } from "../config/Database.js"; // Changed import statement

const { DataTypes } = db.Sequelize; // Access DataTypes from db.Sequelize

const Users = db.define('login', {
  // Define column definitions here
  idlogin: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  firstname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  details: {
    type: DataTypes.STRING,
    allowNull: true,
  },
 
}, {
  tableName: 'login', 
  timestamps: false, 
  freezeTableName: true, 
});

export default Users;