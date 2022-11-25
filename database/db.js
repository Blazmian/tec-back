import Sequelize from 'sequelize';

const db = new Sequelize('tec-class', 'root', '', {
    host:'localhost',
    dialect: 'mysql'
});

export default db