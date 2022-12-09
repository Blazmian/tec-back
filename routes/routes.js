import express from 'express';
import { createAdministrador, deleteAdministrador, getAdministrador, getAllAdministradores, loginAdministrador } from '../controllers/AdministradorController.js';
import { createAlumno, deleteAlumno, getAllAlumnos, getAlumno, updateAlumno } from '../controllers/AlumnosController.js';
import { createCarrera, deleteCarrera, getAllCarreras, getCarrera, updateCarrera } from '../controllers/CarrerasController.js';
import { createDocente, deleteDocente, getAllDocentes, getDocente, loginDocente } from '../controllers/DocenteController.js';
import { createMateria, deleteMateria, getAllMaterias, getMateria, updateMateria } from '../controllers/MateriasController.js';
import { createPersonal, deletePersonal, getAllPersonal, getPersonal, getPersonalNotAdmin, getPersonalNotDocente, updatePersonal } from '../controllers/PersonalController.js';
import AdministradorModel from '../models/AdministradorModel.js';
import jwt from "jsonwebtoken";
import { createPuesto, deletePuesto, getAllPuestos, getPuesto, updatePuesto } from '../controllers/PuestosController.js';
import { getPuestosPersonal } from '../controllers/PuestosPersonalController.js';
import { createGrupo, deleteGrupo, getAllGrupos, getGrupo } from '../controllers/GruposController.js';
import { createClase, deleteClase, getAllClases, getClasesByDocente, getInfoDocente } from '../controllers/ClasesController.js';
import DocentesModel from '../models/DocenteModel.js';

const router = express.Router()

/* - PERSONAL ESCOLAR - */
router.get('/personal_escolar/', getAllPersonal)
router.get('/personal_escolar/:id', getPersonal)
router.get('/personalNotAdmin/', getPersonalNotAdmin)
router.get('/personalNotDocente/', getPersonalNotDocente)
router.post('/personal_escolar/', createPersonal)
router.put('/personal_escolar/:id', updatePersonal)
router.delete('/personal_escolar/:id', deletePersonal)

/* - ADMINISTRADORES - */
router.get('/administradores/', getAllAdministradores)
router.get('/administradores/:id', getAdministrador)
router.post('/loginAdmin/', loginAdministrador)
router.post('/authAdmin', 
async (req, res, next) => {
    try {
        let decoded = jwt.verify(req.body.token, process.env.SECRET)
        req.body = decoded
        next();
    } catch(error) {
        res.status(205).json({ 'Error': 'No se pudo autentificar'})
    }
    },
    async (req, res) => {
    let user = await AdministradorModel.findOne({ where: {usuario: req.body.usuario}, attributes: {exclude: ["pass"]}})
    if (user === null) {
        res.status(404).json({'msg': 'Usuario no encontrado'})
    }
    console.log("USUARIO ENCONTRADO")
    res.json(user)
})
router.post('/administradores/', createAdministrador)
router.delete('/administradores/:id', deleteAdministrador)

/* - DOCENTES - */
router.get('/docentes/', getAllDocentes)
router.post('/loginDocente/', loginDocente)
router.post('/authDocente', 
async (req, res, next) => {
    try {
        let decoded = jwt.verify(req.body.token, process.env.SECRET)
        req.body = decoded
        next();
    } catch(error) {
        res.status(205).json({ 'Error': 'No se pudo autentificar'})
    }
    }, 
    async (req, res) => {
    let user = await DocentesModel.findOne({ where: {no_control_docente: req.body.No_Control}, attributes: {exclude: ["nip"]}})
    if (user === null) {
        res.status(404).json({'msg': 'Usuario no encontrado'})
    }
    console.log("USUARIO ENCONTRADO")
    res.json(user)
})
router.get('/docentes/:id', getDocente)
router.post('/docentes/', createDocente)
router.delete('/docentes/:id', deleteDocente)

/* - ALUMNOS - */
router.get('/alumnos/', getAllAlumnos)
router.get('/alumnos/:id', getAlumno)
router.post('/alumnos/', createAlumno)
router.put('/alumnos/:id', updateAlumno)
router.delete('/alumnos/:id', deleteAlumno)

/* - MATERIAS - */
router.get('/materias/', getAllMaterias)
router.get('/materias/:id', getMateria)
router.post('/materias/', createMateria)
router.put('/materias/:id', updateMateria)
router.delete('/materias/:id', deleteMateria)

/* - CARRERAS - */
router.get('/carreras/', getAllCarreras)
router.get('/carreras/:id', getCarrera)
router.post('/carreras/', createCarrera)
router.put('/carreras/:id', updateCarrera)
router.delete('/carreras/:id', deleteCarrera)

/* - PUESTOS - */
router.get('/puestos/', getAllPuestos)
router.get('/puestos/:id', getPuesto)
router.post('/puestos/', createPuesto)
router.put('/puestos/:id', updatePuesto)
router.delete('/puestos/:id', deletePuesto)

/* - GRUPOS - */
router.get('/grupos/', getAllGrupos)
router.get('/grupos/:id', getGrupo)
router.post('/grupos/', createGrupo)
router.delete('/grupos/:id', deleteGrupo)

/* - CLASES - */
router.get('/clases/', getAllClases)
router.get('/clases/:id', getClasesByDocente)
router.get('/clases/infoDocente/:id', getInfoDocente)
router.post('/clases/', createClase)
router.delete('/clases/:id', deleteClase)

/* - PUESTOS PERSONAL - */
router.get('/puestos_personal/:id', getPuestosPersonal)

export default router;