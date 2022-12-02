import DocentesModel from '../models/DocenteModel.js';
import PersonalModel from '../models/PersonalModel.js';

PersonalModel.hasMany(DocentesModel, {foreignKey: "id_personal", sourceKey: "id_personal", foreigntKeyConstraint: true});

export const getAllDocentes = async (req, res) => {
    try {
        const docentes = await DocentesModel.findAll({
            include: PersonalModel
        });
        res.json(docentes)
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const getDocente = async (req, res) => {
    try {
        const docente = await DocentesModel.findAll({
            where: { no_control_docente: req.params.id }
        })
        res.json(persona[0])
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const createDocente = async (req, res) => {
    try {
        await DocentesModel.create(req.body)
        res.json({
            "message":"¡Docente generado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const deleteDocente = async (req, res) => {
    try {
        await DocentesModel.destroy({
            where: { no_control_docente: req.params.id }
        })
        res.json({
            "message":"¡Docente eliminado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}