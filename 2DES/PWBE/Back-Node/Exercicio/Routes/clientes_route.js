const express = require('express')
const router = express.Router()

const cliente_controll = require('../controll/cliente_controll.js')
router.get('/cantina/clientes', cliente_controll.all)
router.get('/cantina/clientes/:id', cliente_controll.get_id)
router.post('/cantina/create', cliente_controll.add_cliente)
router.delete('/cantina/delete/:id', cliente_controll.delete_cliente)
router.put('/cantina/update', cliente_controll.update_cliente)
module.exports = router