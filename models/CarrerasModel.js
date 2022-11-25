import db from '../database/db.js';
import { DataTypes } from 'sequelize';

const CarrerasModel = db.define('carreras', {
    id_carrera: { type: DataTypes.INTEGER, primaryKey: true },
    nombre_carrera: { type: DataTypes.STRING },
}, {
    tableName: "carrera",
    createdAt: false,   
    updatedAt: false,
})

export default CarrerasModel;