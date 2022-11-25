import db from '../database/db.js';
import { DataTypes } from 'sequelize';

const AdministradorModel = db.define('administradores', {
    usuario: { type: DataTypes.STRING },
    pass: { type: DataTypes.STRING },
    id_personal: { 
        type: DataTypes.INTEGER,
        model: 'personal_escolar',
        key: 'id_personal' 
    },
}, {
    tableName: "administrador",
    createdAt: false,   
    updatedAt: false,
})

AdministradorModel.removeAttribute('id')

export default AdministradorModel;