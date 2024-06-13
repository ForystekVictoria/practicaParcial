import models from '../models/DAO/calificaciones.model.js'

const getCalificaciones = async () => {
    const calificaciones = await models.getCalificaciones()
    return calificaciones
}

const getCalificacionesById= async (id)=>{
const calificacionesById= await models.getCalificacionesById(id)

return calificacionesById
}

const getPromedioNotas= async ()=>{
    const promedioNotas= await models.getPromedioNotas()

    console.log("promedio en service"+ promedioNotas)
    return promedioNotas
}

const getPromedioNotasByCurso= async (curso)=>{
    const promedioNotasByCurso= await models.getPromedioNotasByCurso(curso)
    
    return promedioNotasByCurso
    }


const postCalificaciones = async (data) => {
    const calificaciones = await models.postCalificaciones(data)
    return calificaciones
}
const modificarCalificaciones=async (id,data)=>{
    const calificaciones= await models.modificarCalificaciones(id,data)
    return calificaciones
}


export default {
    getCalificaciones,
    postCalificaciones,
    getCalificacionesById,
    getPromedioNotas,
    getPromedioNotasByCurso,
    modificarCalificaciones
}