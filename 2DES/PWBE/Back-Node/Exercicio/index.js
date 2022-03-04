const express = require('express')
const cors = require('cors')

const router = express.Router()
const app = express()

app.use(cors())
app.use(express.json())

const cliente_read = require('./routes/clientes_route.js')
app.use(cliente_read)

app.use('/', router)
app.listen(3000, () => {
    console.log("Rodando na porta 3000")
})