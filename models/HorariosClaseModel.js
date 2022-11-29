import db from '../database/db.js';
import { DataTypes } from 'sequelize';
import ClasesModel from './ClasesModel.js';

const HorariosClaseModel = db.define('horario_clase', {
    id_clase: { type: DataTypes.INTEGER },
    dia: { type: DataTypes.STRING },
    horas: { type: DataTypes.STRING },
}, {
    tableName: "horario_clase",
    createdAt: false,   
    updatedAt: false,
})

HorariosClaseModel.removeAttribute('id')
HorariosClaseModel.belongsTo(ClasesModel, {foreignKey: 'id_clase'})

export default HorariosClaseModel;