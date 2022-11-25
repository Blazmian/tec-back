import db from '../database/db.js';
import { DataTypes } from 'sequelize';

const DocentesModel = db.define('docentes', {
    no_control_docente: { type: DataTypes.INTEGER, primaryKey: true },
    nip: { type: DataTypes.STRING },
    id_personal: { type: DataTypes.STRING },
}, {
    tableName: "docente",
    createdAt: false,   
    updatedAt: false,
})

export default DocentesModel;