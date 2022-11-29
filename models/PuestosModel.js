import db from '../database/db.js';
import { DataTypes } from 'sequelize';

const PuestosModel = db.define('puestos', {
    id_puesto: { type: DataTypes.INTEGER, primaryKey: true },
    puesto: { type: DataTypes.STRING },
}, {
    tableName: "puestos",
    createdAt: false,   
    updatedAt: false,
})

PuestosModel.removeAttribute('id')

export default PuestosModel;