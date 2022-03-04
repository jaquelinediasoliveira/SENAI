const express = require('express')
const router = express.Router()

const funcionario_controll = require('../controll/funcionario_controll.js')
router.get('/contabilidade/funcionarios', funcionario_controll.all)
router.get('/contabilidade/funcionarios/:matricula', funcionario_controll.get_matricula)
router.post('/contabilidade/create', funcionario_controll.add_funcionario)
router.delete('/contabilidade/delete/:id',funcionario_controlll.delete_funcionario)
router.put('/contabilidade/update', funcionario_controll.update_funcionario)
module.exports = router