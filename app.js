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

