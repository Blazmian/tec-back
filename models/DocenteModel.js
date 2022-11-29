import db from '../database/db.js';
import { DataTypes } from 'sequelize';
import PersonalModel from './PersonalModel.js';

const DocentesModel = db.define('docentes', {
    no_control_docente: { type: DataTypes.INTEGER, primaryKey: true },
    nip: { type: DataTypes.STRING },
    id_personal: { type: DataTypes.STRING },
}, {
    tableName: "docente",
    createdAt: false,   
    updatedAt: false,
})

DocentesModel.removeAttribute('id')
DocentesModel.belongsTo(PersonalModel, {foreignKey: 'id_personal'})

export default DocentesModel;