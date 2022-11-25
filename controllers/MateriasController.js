import MateriasModel from "../models/MateriasModel.js";

export const getAllMaterias = async (req, res) => {
    try {
        const materias = await MateriasModel.findAll();
        res.json(materias)
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const getMateria = async (req, res) => {
    try {
        const materia = await MateriasModel.findAll({
            where: { id_asignatura: req.params.id }
        })
        res.json(materia[0])
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const createMateria = async (req, res) => {
    try {
        await MateriasModel.create(req.body)
        res.json({
            "message":"¡Materia creada correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const updateMateria = async (req, res) => {
    try {
        await MateriasModel.update(req.body, {
            where: { id_asignatura: req.params.id }
        })
        res.json({
            "message":"¡Materia actualizada correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const deleteMateria = async (req, res) => {
    try {
        await MateriasModel.destroy({
            where: { id_asignatura: req.params.id }
        })
        res.json({
            "message":"¡Materia eliminada correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}