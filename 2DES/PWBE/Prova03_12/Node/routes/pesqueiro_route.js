const express = require("express")
const router = express.Router()

const pesqueiro_controll = require('../controll/pesqueiro_controll.js')
router.get("/pesqueiro/pescaria", pesqueiro_controll.todos)
router.get("/pesqueiro/pescaria/:id", pesqueiro_controll.todos_id)
router.post("/pesqueiro/novo", pesqueiro_controll.nova_pescaria)
router.delete("/pesqueiro/apagar/:id", pesqueiro_controll.apagar_pescaria)
router.put("/pesqueiro/atualizar", pesqueiro_controll.atualizar_pescaria)

module.exports = router