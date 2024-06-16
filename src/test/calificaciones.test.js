import generator from "./generator.js"
import supertest from "supertest"
import { expect } from 'chai'

// con el ip para q supertest lo soporte
const path = supertest ("http://127.0.0.1:8080")


// describir de que trata el test con describe- metodo de mocha
describe('Test con faker', () => {
    it('Obtener datos con faker', () => {
        const data = generator.randomData()
        expect(data)
    })

    describe('testeo de endPoints', () => {
        it('GET', async () => {
            const response = await path.get("/calificaciones")
            console.log(response._body)
            expect(response.status).to.eq(200)
        })

        it('POST', async () => {
            const data= generator.randomData()
            const response = await path.post("/calificaciones").send(data)
            
           
            expect(response.status).to.eq(200)
            const newData= response.body

            expect (newData).to.include.keys("nombre", "nota", "curso")
        })
    })

})

