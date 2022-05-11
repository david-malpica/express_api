// Añadir Express
const express = require('express')
//Crear app de Express
const app = express()
app.use(express.json()) // Indicamos que se usara JSON
// Puerto 3000
const port = 3000

// Iniciar App
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// HTTP METHODS
// GET method
app.get('/v1/explorers', (req,res) => {
    console.log(`API explorers GET all requests ${new Date()}`)
    const explorer1 = {id: 1, name: "David1"}
    const explorer2 = {id: 2, name: "David2"}
    const explorer3 = {id: 3, name: "David3"}
    const explorer4 = {id: 4, name: "David4"}
    const explorers = [explorer1,explorer2,explorer3,explorer4]
    res.status(200).json(explorers)
})

app.get('/v1/explorers/:id',(req,res) => {
    console.log(`API explorers GET request ${new Date()}`)
    console.log(`Getting explorer with id ${req.params.id}`)
    const explorer = {id: 1,name: "David"}
    res.status(200).json(explorer)
})

// POST method
app.post('/v1/explorers', (req,res) => {
    console.log(`API explorers POST request ${new Date()}`)
    const requestBody = req.body // parametros de cliente
    res.status(201).json({message: "Created"})
})

// PUT method
app.put('/v1/explorers/:id', (req,res) => {
    console.log(`API explorers PUT request ${new Date()}`)
    console.log(`Update explorer with id ${req.params.id}`)
    const requestBody = req.body // parametros de un cliente
    res.status(200).json({message: "Updated!"})
})