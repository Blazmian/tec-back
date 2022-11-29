import db from '../database/db.js';
import { DataTypes } from 'sequelize';
import ClasesModel from './ClasesModel.js';

const AsignacionesModel = db.define('asignaciones', {
    id_asignacion: { type: DataTypes.INTEGER, primaryKey: true },
    id_clase: { type: DataTypes.INTEGER },
    titulo_trabajo: { type: DataTypes.STRING },
    descripcion: { type: DataTypes.TEXT },
    calificacion_general: { type: DataTypes.DOUBLE },
}, {
    tableName: "asignaciones",
    createdAt: false,   
    updatedAt: false,
})

AsignacionesModel.removeAttribute('id')
AsignacionesModel.belongsTo(ClasesModel, {foreignKey: 'id_clase'})

export default AsignacionesModel;