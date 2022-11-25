import DocentesModel from '../models/DocenteModel.js';

export const getAllDocentes = async (req, res) => {
    try {
        const docentes = await DocenteModels.findAll();
        res.json(docentes)
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const getDocente = async (req, res) => {
    try {
        const docente = await DocenteModels.findAll({
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

export const updateDocente = async (req, res) => {
    try {
        await DocentesModel.update(req.body, {
            where: { no_control_docente: req.params.id }
        })
        res.json({
            "message":"¡Docente actualizado correctamente!"
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