import db from '../database/db.js';
import { DataTypes } from 'sequelize';
import PersonalModel from "../models/PersonalModel.js";
import PuestosModel from "../models/PuestosModel.js";

const PuestosPersonalModel = db.define('puestos_personal', {
    id_puesto: { type: DataTypes.INTEGER },
    id_personal: { type: DataTypes.INTEGER },
}, {
    tableName: "puestos_personal",
    createdAt: false,   
    updatedAt: false,
})

PuestosPersonalModel.removeAttribute('id')
PuestosPersonalModel.belongsTo(PersonalModel, {foreignKey: 'id_personal'})
PuestosPersonalModel.belongsTo(PuestosModel, {foreignKey: 'id_puesto'})

export default PuestosPersonalModel;