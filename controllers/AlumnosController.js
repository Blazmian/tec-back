import AlumnosModel from "../models/AlumnosModel.js";

export const getAllAlumnos = async (req, res) => {
    try {
        const alumnos = await AlumnosModel.findAll();
        res.json(alumnos)
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const getAlumno = async (req, res) => {
    try {
        const alumno = await AlumnosModel.findAll({
            where: { no_control_alumno: req.params.id }
        })
        res.json(alumno[0])
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const createAlumno = async (req, res) => {
    try {
        await AlumnosModel.create(req.body)
        res.json({
            "message":"¡Alumno creado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const updateAlumno = async (req, res) => {
    try {
        await AlumnosModel.update(req.body, {
            where: { no_control_alumno: req.params.id }
        })
        res.json({
            "message":"¡Alumno actualizado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const deleteAlumno = async (req, res) => {
    try {
        await AlumnosModel.destroy({
            where: { no_control_alumno: req.params.id }
        })
        res.json({
            "message":"¡Alumno eliminado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}