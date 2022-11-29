import db from '../database/db.js';
import { DataTypes } from 'sequelize';

const AlumnosModel = db.define('alumnos', {
    no_control_alumno: { type: DataTypes.INTEGER, primaryKey: true },
    nombre_alumno: { type: DataTypes.STRING },
    primer_ape: { type: DataTypes.STRING },
    segundo_ape: { type: DataTypes.STRING },
    fecha_nacimiento: { type: DataTypes.DATE },
    semestre: { type: DataTypes.INTEGER },
    telefono: { type: DataTypes.STRING },
    domicilio: { type: DataTypes.STRING },
    nip: { type: DataTypes.STRING },
    correo: { type: DataTypes.STRING },
    genero: { type: DataTypes.STRING },
}, {
    tableName: "alumnos",
    createdAt: false,   
    updatedAt: false,
})

AlumnosModel.removeAttribute('id')

export default AlumnosModel;