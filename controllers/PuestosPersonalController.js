import PuestosPersonalModel from "../models/PuestosPersonalModel.js";
import PersonalModel from "../models/PersonalModel.js";
import PuestosModel from "../models/PuestosModel.js";

PersonalModel.hasMany(PuestosPersonalModel, {foreignKey: "id_personal", sourceKey: "id_personal", foreigntKeyConstraint: true});
PuestosModel.hasMany(PuestosPersonalModel, {foreignKey: "id_puesto", sourceKey: "id_puesto", foreigntKeyConstraint: true});

export const getPuestosPersonal = async (req, res) => {
    try {
        const puesto_personal = await PuestosPersonalModel.findAll({
            where: { id_personal: req.params.id },
            include: PuestosModel
        })
        res.json(puesto_personal)
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const createPuestoPersonal = async (req, res) => {
    try {
        await PuestosPersonalModel.create(req.body)
        res.json({
            "message":"¡Puesto asignado creado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const updatePuestoPersonal = async (req, res) => {
    try {
        await PuestosPersonalModel.update(req.body, {
            where: { id_personal: req.params.id }
        })
        res.json({
            "message":"¡Puesto actualizado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const deletePuestoPersonal = async (req, res) => {
    try {
        await PuestosPersonalModel.destroy({
            where: { id_personal: req.params.id_personal, id_puesto: req.params.id_puesto }
        })
        res.json({
            "message":"¡Administrador eliminado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}