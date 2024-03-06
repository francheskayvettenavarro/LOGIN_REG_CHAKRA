import { Sequelize } from 'sequelize';

const db = new Sequelize({
    dialect: 'mysql',
    host: "192.168.2.116",
    port: "3306",
    username: "hydra.admin",
    password: "YPOuLIEkTFyLrjOB3dT123",
    database: "hydra"
});

export { db };