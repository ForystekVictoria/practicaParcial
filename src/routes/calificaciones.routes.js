import express from 'express'
import controller from '../controllers/calificaciones.controller.js'

const router = express.Router()

router.get("/calificaciones", controller.getCalificaciones)
router.get("/calificaciones/promedio", controller.getPromedioNotas)
router.get("/calificaciones/promedio/:curso", controller.getPromedioNotasByCurso)
router.get("/calificaciones/:id", controller.getCalificacionesById)

router.put("/calificaciones/modificar/:id", controller.modificarCalificaciones)

router.post("/calificaciones", controller.postCalificaciones)

export default router