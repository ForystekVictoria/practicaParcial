import service from '../services/calificaciones.services.js'



const getCalificaciones = async (req, res) => {
    const calificaciones = await service.getCalificaciones()
    res.send(calificaciones)
}

const getCalificacionesById = async (req, res) => {
        const {id} = req.params 
        const calificacionesById = await service.getCalificacionesById(id)
        console.log("aca pasa x el getByID")
        
        res.send(calificacionesById);
    
}
const getPromedioNotas = async (req, res) => {
    const promedio = await service.getPromedioNotas()
  
    res.json(promedio)
}

const getPromedioNotasByCurso = async (req, res) => {
    const {curso} = req.params 
    const promedioByCurso = await service.getPromedioNotasByCurso(curso)
    
    res.json(promedioByCurso);

}

const postCalificaciones = async (req, res) => {
    const nuevaCalificacion = req.body
    const calificaciones = await service.postCalificaciones(nuevaCalificacion)
    res.send(calificaciones)
}

const modificarCalificaciones= async(req,res)=> {
    const {id}= req.params
    const actualizacionCalificacion = req.body
    const calificaciones= await service.modificarCalificaciones(id,actualizacionCalificacion)
    res.send(calificaciones)
}

export default {
    getCalificaciones,
    postCalificaciones,
    getCalificacionesById,
    getPromedioNotas,
    getPromedioNotasByCurso,
    modificarCalificaciones
}