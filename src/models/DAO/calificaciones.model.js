const calificaciones= [
  {
    "id": 1,
    "nombre": "Juan Pérez",
    "nota": 8,
    "curso": "1A"
  },
  {
    "id": 2,
    "nombre": "Ana López",
    "nota": 9,
    "curso": "2A"
  },
  {
    "id": 3,
    "nombre": "Carlos Ruiz",
    "nota": 1,
    "curso": "3A"
  },
  {
    "id": 4,
    "nombre": "Marta Gómez",
    "nota": 10,
    "curso": "1A"
  },
  {
    "id": 5,
    "nombre": "Luis Fernández",
    "nota": 6,
    "curso": "2A"
  }
]

const getCalificaciones = async () => {
  return calificaciones
}

const getCalificacionesById= async (id)=>{

 const calificacion = calificaciones.find((element) => element.id == id);
 const mensajeEnviar= "¡Hola ${calificacion.nombre} ! tu nota es : ${calificacion.nota}"
    return calificacion || "Calificacion inexistente."
}

const getPromedioNotas= async()=>{
  const suma = calificaciones.reduce((acumulador,elemento)=> acumulador + elemento.nota,0)
  
  return suma/ calificaciones.length
}

const getPromedioNotasByCurso= async (curso)=>{

   const notasCurso = calificaciones.filter((element) => element.curso == curso);
   const suma = notasCurso.reduce((acumulador,elemento)=> acumulador + elemento.nota,0)
  
  return suma/ notasCurso.length

  }



const postCalificaciones = async (data) => {
  console.log('DATA: ', data)
  data.id = calificaciones.length + 1;
  await calificaciones.push(data)
  return data
}
const modificarCalificaciones= async(id,data) =>{
  data.id = id
  const index = calificaciones.findIndex((e) => e.id == id)
  calificaciones.splice(index, 1, data)
  return data
}

export default {
  getCalificaciones,
  postCalificaciones,
  getCalificacionesById,
  getPromedioNotas,
  getPromedioNotasByCurso,
  modificarCalificaciones
}