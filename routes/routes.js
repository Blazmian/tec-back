import express from 'express';
import { adminAuthenticate, createAdministrador, deleteAdministrador, getAdministrador, getAllAdministradores, loginAdministrador, updatePassAdministrador } from '../controllers/AdministradorController.js';
import { createAlumno, deleteAlumno, getAllAlumnos, getAlumno, updateAlumno } from '../controllers/AlumnosController.js';
import { createCarrera, deleteCarrera, getAllCarreras, getCarrera, updateCarrera } from '../controllers/CarrerasController.js';
import { createDocente, deleteDocente, getAllDocentes, getDocente, updateDocente } from '../controllers/DocenteController.js';
import { createMateria, deleteMateria, getAllMaterias, getMateria, updateMateria } from '../controllers/MateriasController.js';
import { createPersonal, deletePersonal, getAllPersonal, getPersonal, getPersonalNotAdmin, updatePersonal } from '../controllers/PersonalController.js';
import AdministradorModel from '../models/AdministradorModel.js';
import jwt from "jsonwebtoken";

const router = express.Router()

/* - PERSONAL ESCOLAR - */
router.get('/personal_escolar/', getAllPersonal)
router.get('/personal_escolar/:id', getPersonal)
router.get('/personalNotAdmin/', getPersonalNotAdmin)
router.post('/personal_escolar/', createPersonal)
router.put('/personal_escolar/:id', updatePersonal)
router.delete('/personal_escolar/:id', deletePersonal)

/* - ADMINISTRADORES - */
router.get('/administradores/', getAllAdministradores)
router.get('/administradores/:id', getAdministrador)
router.post('/login/', loginAdministrador)
router.post('/auth', 
async (req, res, next) => {
    try {
        let decoded = jwt.verify(req.body.token, process.env.SECRET)
        req.body = decoded
        next();
    } catch(error) {
        res.status(401).json({ 'Error': 'No se pudo autentificar'})
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
router.put('/administradores/:id', updatePassAdministrador)
router.delete('/administradores/:id', deleteAdministrador)

/* - DOCENTES - */
router.get('/docentes/', getAllDocentes)
router.get('/docentes/:id', getDocente)
router.post('/docentes/', createDocente)
router.put('/docentes/:id', updateDocente)
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

export default router;