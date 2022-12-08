import GrupoModel from '../models/GrupoModel.js';
import DocentesModel from '../models/DocenteModel.js';
import MateriasModel from '../models/MateriasModel.js';
import ClasesModel from '../models/ClasesModel.js';
import PersonalModel from '../models/PersonalModel.js';
import CarrerasModel from '../models/CarrerasModel.js';

DocentesModel.hasMany(ClasesModel, {foreignKey: "no_control_docente", sourceKey: "no_control_docente", foreigntKeyConstraint: true});
GrupoModel.hasMany(ClasesModel, {foreignKey: "id_grupo", sourceKey: "id_grupo", foreigntKeyConstraint: true});
MateriasModel.hasMany(ClasesModel, {foreignKey: "id_asignatura", sourceKey: "id_asignatura", foreigntKeyConstraint: true});

export const getAllClases = async (req, res) => {
    try {
        const clases = await ClasesModel.findAll({
            include: [
                { 
                    model: DocentesModel,
                    include: [ PersonalModel ]
                },
                { model: GrupoModel },
                { model: MateriasModel }
            ]
        });
        res.json(clases)
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const getClasesByDocente = async (req, res) => {
    try {
        const clases = await ClasesModel.findAll({
            where: {no_control_docente: req.params.id},
            include: [
                { 
                    model: GrupoModel,
                    include: CarrerasModel
                },
                { model: MateriasModel }
            ],
        });
        res.json(clases)
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const getInfoDocente = async (req, res) => {
    try {
        const clases = await ClasesModel.findAll({
            where: {no_control_docente: req.params.id},
            include: [
                {
                    model: DocentesModel,
                    include: PersonalModel 
                }
            ],
        });
        res.json(clases)
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const createClase = async (req, res) => {
    try {
        await ClasesModel.create(req.body)
        res.json({
            "message":"¡Clase generada correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const deleteClase = async (req, res) => {
    try {
        await ClasesModel.destroy({
            where: { id_clase: req.params.id }
        })
        res.json({
            "message":"¡Clase eliminada correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}