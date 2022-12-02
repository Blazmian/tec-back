import db from '../database/db.js';
import { DataTypes } from 'sequelize';

const PersonalModel = db.define('personal_escolar', {
    id_personal: { type: DataTypes.INTEGER, primaryKey: true },
    nombre: { type: DataTypes.STRING },
    primer_ape: { type: DataTypes.STRING },
    segundo_ape: { type: DataTypes.STRING },
    correo: { type: DataTypes.STRING },
    telefono: { type: DataTypes.STRING },
    genero: { type: DataTypes.STRING },
    domicilio: { type: DataTypes.STRING },
    fecha_nacimiento: { type: DataTypes.DATE },
}, {
    tableName: "personal_escolar",
    createdAt: false,   
    updatedAt: false,
})

PersonalModel.removeAttribute('id')

export default PersonalModel;