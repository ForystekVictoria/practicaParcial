const calificaciones= [
  {
    "nombre": "Juan Pérez",
    "nota": 8,
    "curso": "1A"
  },
  {
    "nombre": "Ana López",
    "nota": 9,
    "curso": "2A"
  },
  {
    "nombre": "Carlos Ruiz",
    "nota": 7,
    "curso": "3A"
  },
  {
    "nombre": "Marta Gómez",
    "nota": 10,
    "curso": "1A"
  },
  {
    "nombre": "Luis Fernández",
    "nota": 6,
    "curso": "2A"
  }
]

const getCalificaciones = async () => {
  return calificaciones
}

const postCalificaciones = async (data) => {
  const nuevaCalificacion = await calificaciones.push(data)
  return data
}

export default {
  getCalificaciones,
  postCalificaciones
}