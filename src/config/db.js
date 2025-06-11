// src/config/db.js
const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config({ path: require('path').resolve(__dirname, '../../.env') });


console.log('Usuario desde .env:', process.env.DB_USER); 

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT || 3306,
    logging: false,
  }
);

module.exports = sequelize;
