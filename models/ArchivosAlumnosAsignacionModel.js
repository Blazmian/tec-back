import db from '../database/db.js';
import { DataTypes } from 'sequelize';
import AsignacionesAlumnoModel from './AsignacionesAlumnoModel.js';

const ArchivosAlumnosAsignacionModel = db.define('archivos_alumnnos_asignacion', {
    id_archivo_alumno: { type: DataTypes.INTEGER, primaryKey: true },
    id_asignacion_alumno: { type: DataTypes.INTEGER },
    archivo: { type: DataTypes.BLOB },
}, {
    tableName: "archivos_alumnnos_asignacion",
    createdAt: false,   
    updatedAt: false,
})

ArchivosAlumnosAsignacionModel.removeAttribute('id')
ArchivosAlumnosAsignacionModel.belongsTo(AsignacionesAlumnoModel, {foreignKey: 'id_asignacion_alumno'})

export default ArchivosAlumnosAsignacionModel;