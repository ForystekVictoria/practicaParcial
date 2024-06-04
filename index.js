import express from 'express'


const app = express()
const PORT = 8080 

app.use(express.json()) 
app.use(express.urlencoded({extended: true}))

app.listen(PORT, () => console.log(`Server listening on: http://localhost:8080`));
app.on("Error", (error)=> console.log(`Server error: ${error}`))
app.get("/",(req,res)=>{
    res.send("HOLA!")
});
