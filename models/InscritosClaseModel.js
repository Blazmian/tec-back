import db from '../database/db.js';
import ClasesModel from './ClasesModel.js';
import AlumnosModel from './AlumnosModel.js';

const InscritosClaseModel = db.define('inscritos_clase', {
    id_clase: { type: DataTypes.INTEGER },
    no_control_alumno: { type: DataTypes.INTEGER },
    calificacion: { type: DataTypes.INTEGER },
}, {
    tableName: "inscritos_clase",
    createdAt: false,   
    updatedAt: false,
})

InscritosClaseModel.removeAttribute('id')
InscritosClaseModel.belongsTo(ClasesModel, {foreignKey: 'id_clase'})
InscritosClaseModel.belongsTo(AlumnosModel, {foreignKey: 'no_control_alumno'})

export default InscritosClaseModel;