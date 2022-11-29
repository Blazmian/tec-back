import PuestosPersonalModel from "../models/PuestosPersonalModel.js";
import PersonalModel from "../models/PersonalModel.js";
import PuestosModel from "../models/PuestosModel.js";

PersonalModel.hasMany(PuestosPersonalModel, {foreignKey: "id_personal", sourceKey: "id_personal", foreigntKeyConstraint: true});
PuestosModel.hasMany(PuestosPersonalModel, {foreignKey: "id_puesto", sourceKey: "id_puesto", foreigntKeyConstraint: true});

export const getAllPuestosPersonal = async (req, res) => {
    try {
        const puestos_personal = await PuestosPersonalModel.findAll({
            include: PersonalModel, PuestosModel
        });
        res.json(puestos_personal)
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const getAdministrador = async (req, res) => {
    try {
        const administrador = await AdministradorModel.findAll({
            where: { id_personal: req.params.id }
        })
        res.json(administrador[0])
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const loginAdministrador = async (req, res) => {
    try {
        const user = await AdministradorModel.findOne({ where: { usuario: req.body.usuario } })
        if (user) {
            const passValid = await bcrypt.compare(req.body.pass, user.pass)
            if (passValid) {
                let token = jwt.sign({"usuario": user.usuario, "id_personal": user.id_personal}, process.env.SECRET)
                res.status(200).json({
                    user: user,
                    token: token
                })
            } else {
                res.status(400).json({error: "Contraseña incorrecta"})
            }
        } else {
            res.status(404).json({error: "Usuario no existente"})
        }
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const adminAuthenticate = async (req, res, next) => {
    try {
        let decoded = jwt.verify(req.body.token, process.env.SECRET)
        req.usuario = decoded.usuario
        next();
    } catch(error) {
        res.json('No se pudo autentificar')
    }
}

export const createAdministrador = async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10)
        var usr = {
            usuario: req.body.usuario,
            pass: await bcrypt.hash(req.body.pass, salt),
            id_personal: req.body.id_personal
        }
        await AdministradorModel.create(usr)
        res.json({
            "message":"¡Administrador creado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const updatePassAdministrador = async (req, res) => {
    try {
        await AdministradorModel.update(req.body, {
            where: { usuario: req.params.id }
        })
        res.json({
            "message":"¡Contraseña actualizada correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const deleteAdministrador = async (req, res) => {
    try {
        await AdministradorModel.destroy({
            where: { id_personal: req.params.id }
        })
        res.json({
            "message":"¡Administrador eliminado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}