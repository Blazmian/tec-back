import PuestosModel from "../models/PuestosModel.js";

export const getAllPuestos = async (req, res) => {
    try {
        const puestos = await PuestosModel.findAll();
        res.json(puestos)
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const getPuesto = async (req, res) => {
    try {
        const puesto = await PuestosModel.findAll({
            where: { id_puesto: req.params.id }
        })
        res.json(puesto[0])
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const createPuesto = async (req, res) => {
    try {
        await PuestosModel.create(req.body)
        res.json({
            "message":"¡Puesto creado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const updatePuesto = async (req, res) => {
    try {
        await PuestosModel.update(req.body, {
            where: { id_puesto: req.params.id }
        })
        res.json({
            "message":"¡Puesto actualizado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const deletePuesto = async (req, res) => {
    try {
        await PuestosModel.destroy({
            where: { id_puesto: req.params.id }
        })
        res.json({
            "message":"¡Puesto eliminado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}