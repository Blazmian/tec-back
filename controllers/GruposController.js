import GrupoModel from '../models/GrupoModel.js';
import CarrerasModel from '../models/CarrerasModel.js';

CarrerasModel.hasMany(GrupoModel, {foreignKey: "id_carrera", sourceKey: "id_carrera", foreigntKeyConstraint: true});

export const getAllGrupos = async (req, res) => {
    try {
        const grupos = await GrupoModel.findAll({
            include: CarrerasModel
        });
        res.json(grupos)
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const getGrupo = async (req, res) => {
    try {
        const grupo = await GrupoModel.findAll({
            where: { id_grupo: req.params.id }
        })
        res.json(grupo[0])
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const createGrupo = async (req, res) => {
    try {
        await GrupoModel.create(req.body)
        res.json({
            "message":"¡Grupo generado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const deleteGrupo = async (req, res) => {
    try {
        await GrupoModel.destroy({
            where: { id_grupo: req.params.id }
        })
        res.json({
            "message":"¡Grupo eliminado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}