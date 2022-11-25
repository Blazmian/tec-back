import CarrerasModel from "../models/CarrerasModel.js";

export const getAllCarreras = async (req, res) => {
    try {
        const carreras = await CarrerasModel.findAll();
        res.json(carreras)
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const getCarrera = async (req, res) => {
    try {
        const carrera = await CarrerasModel.findAll({
            where: { id_carrera: req.params.id }
        })
        res.json(carrera[0])
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const createCarrera = async (req, res) => {
    try {
        await CarrerasModel.create(req.body)
        res.json({
            "message":"¡Carrera creada correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const updateCarrera = async (req, res) => {
    try {
        await CarrerasModel.update(req.body, {
            where: { id_carrera: req.params.id }
        })
        res.json({
            "message":"¡Carrera actualizada correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const deleteCarrera = async (req, res) => {
    try {
        await CarrerasModel.destroy({
            where: { id_carrera: req.params.id }
        })
        res.json({
            "message":"¡Carrera eliminada correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}