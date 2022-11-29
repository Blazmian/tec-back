import db from '../database/db.js';
import { DataTypes } from 'sequelize';
import AsignacionesModel from './AsignacionesModel.js';

const AsignacionesAlumnoModel = db.define('asignaciones_alumno', {
    id_asignacion_alumno: { type: DataTypes.INTEGER, primaryKey: true },
    id_asignacion: { type: DataTypes.INTEGER },
    no_control_alumno: { type: DataTypes.INTEGER },
    calificacion: { type: DataTypes.INTEGER },
}, {
    tableName: "asignaciones_alumno",
    createdAt: false,   
    updatedAt: false,
})

AsignacionesAlumnoModel.removeAttribute('id')
AsignacionesAlumnoModel.belongsTo(AsignacionesModel, {foreignKey: 'id_asignacion'})

export default AsignacionesAlumnoModel;