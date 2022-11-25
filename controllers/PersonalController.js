import { Sequelize } from "sequelize";
import db from "../database/db.js";
import PersonalModel from "../models/PersonalModel.js";

export const getAllPersonal = async (req, res) => {
    try {
        const personal = await PersonalModel.findAll();
        res.json(personal)
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const getPersonal = async (req, res) => {
    try {
        const persona = await PersonalModel.findAll({
            where: { id_personal: req.params.id }
        })
        res.json(persona[0])
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const getPersonalNotAdmin = async (req, res) => {
    try {
        const personal = await db.query("SELECT * FROM personal_escolar WHERE id_personal NOT IN (SELECT id_personal FROM administrador);")
        res.json(personal[0])
    } catch (error) {
        res.json({message: error.message})
    }
}

export const createPersonal = async (req, res) => {
    try {
        await PersonalModel.create(req.body)
        res.json({
            "message":"¡Persona ingresada correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const updatePersonal = async (req, res) => {
    try {
        await PersonalModel.update(req.body, {
            where: { id_personal: req.params.id }
        })
        res.json({
            "message":"¡Personal actualizado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const deletePersonal = async (req, res) => {
    try {
        await PersonalModel.destroy({
            where: { id_personal: req.params.id }
        })
        res.json({
            "message":"¡Personal eliminado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}