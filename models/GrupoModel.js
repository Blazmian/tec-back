import db from '../database/db.js';
import { DataTypes } from 'sequelize';
import CarrerasModel from './CarrerasModel.js';

const GrupoModel = db.define('grupo', {
    id_grupo: { type: DataTypes.INTEGER, primaryKey: true },
    nombre_grupo: { type: DataTypes.STRING },
    capacidad: { type: DataTypes.INTEGER },
    id_carrera: { type: DataTypes.INTEGER },
}, {
    tableName: "grupo",
    createdAt: false,   
    updatedAt: false,
})

GrupoModel.removeAttribute('id')
GrupoModel.belongsTo(CarrerasModel, {foreignKey: 'id_carrera'})

export default GrupoModel;