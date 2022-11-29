import db from '../database/db.js';
import { DataTypes } from 'sequelize';

const MateriasModel = db.define('materias', {
    id_asignatura: { type: DataTypes.INTEGER, primaryKey: true },
    nombre_asignatura: { type: DataTypes.STRING },
}, {
    tableName: "asignatura",
    createdAt: false,   
    updatedAt: false,
})

MateriasModel.removeAttribute('id')

export default MateriasModel;