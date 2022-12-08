import DocentesModel from '../models/DocenteModel.js';
import PersonalModel from '../models/PersonalModel.js';
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config()

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

export const loginDocente = async (req, res) => {
    try {
        const user = await DocentesModel.findOne({ where: { no_control_docente: req.body.usuario } })
        if (user) {
            if (user.nip == req.body.pass) {
                let token = jwt.sign({"No_Control": user.no_control_docente, "id_personal": user.id_personal}, process.env.SECRET)
                res.status(200).json({
                    user: user,
                    token: token
                })
            } else {
                res.status(400).json({error: "Contraseña incorrecta"})
            }
        } else {
            res.status(404).json({error: "Docente no existente"})
        }
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