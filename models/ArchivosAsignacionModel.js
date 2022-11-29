import db from '../database/db.js';
import { DataTypes } from 'sequelize';
import AsignacionesModel from './AsignacionesModel.js';

const ArchivosAsignacionModel = db.define('archivos_asignacion', {
    id_archivo_asignacion: { type: DataTypes.INTEGER, primaryKey: true },
    id_asignacion: { type: DataTypes.INTEGER },
    archivo: { type: DataTypes.BLOB },
}, {
    tableName: "archivos_asignacion",
    createdAt: false,   
    updatedAt: false,
})

ArchivosAsignacionModel.removeAttribute('id')
ArchivosAsignacionModel.belongsTo(AsignacionesModel, {foreignKey: 'id_asignacion'})

export default ArchivosAsignacionModel;