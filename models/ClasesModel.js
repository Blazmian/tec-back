import db from '../database/db.js';
import { DataTypes } from 'sequelize';
import DocenteModel from './DocenteModel.js';
import GrupoModel from './GrupoModel.js';
import MateriasModel from './MateriasModel.js';

const ClasesModel = db.define('clase', {
    id_clase: { type: DataTypes.INTEGER, primaryKey: true },
    no_control_docente: { type: DataTypes.INTEGER },
    id_grupo: { type: DataTypes.INTEGER },
    id_asignatura: { type: DataTypes.INTEGER },
    enlace: { type: DataTypes.TEXT },
}, {
    tableName: "clase",
    createdAt: false,   
    updatedAt: false,
})

ClasesModel.removeAttribute('id')
ClasesModel.belongsTo(DocenteModel, {foreignKey: 'no_control_docente'})
ClasesModel.belongsTo(GrupoModel, {foreignKey: 'id_grupo'})
ClasesModel.belongsTo(MateriasModel, {foreignKey: 'id_asignatura'})

export default ClasesModel;