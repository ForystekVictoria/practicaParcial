import models from '../models/DAO/calificaciones.model.js'

const getCalificaciones = async () => {
    const calificaciones = await models.getCalificaciones()
    return calificaciones
}

const postCalificaciones = async (data) => {
    const calificaciones = await models.postCalificaciones(data)
    return calificaciones
}

export default {
    getCalificaciones,
    postCalificaciones
}