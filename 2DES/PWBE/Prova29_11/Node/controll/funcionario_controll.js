const { con } = require("./mysql_controll.js")

const all = (req,res) => {
    let string = 'select * from funcionarios'
    con.query(string, (err, result)=>{
        res.json(result)
    })
}

const get_matricula = (req,res) => {
    let string = 'select * from funcionarios where matricula = '+ req.params.matricula
    con.query(string, (err, result)=>{
        res.json(result)
    })
}

const add_funcionario = (req,res) => {
    let body = req.body
    let string = 'insert into funcionario(matricula, nome_completo, data_desligamento, ultimo_salario) values (\'' + body.matricula + '\',' + body.nome_completo + '\',' + body.data_desligamento + ',\'' + body.ultimo_salario + '\')' 
    con.query(string, (err, result)=>{
        if(err != null){
            res.status(400).end()
        }else{
            res.status(200).end()
        }
    })
}

const delete_cliente = (req,res) => {
    let string = 'delete from clientes where id = ' + req.params.id
    con.query(string, (err, result)=>{
        if(result.affectedRows == 0){
            res.send(400).end()
        }else{
            res.send(200).end()
        }
    })
}

const update_cliente = (req, res) => {
    let nome = '\''+req.body.nome+'\''
    let valor = req.body.valor
    let status = '\''+req.body.status+'\''
    let id = req.body.id
    let string = `update clientes set nome = ${nome}, valor= ${valor}, status= ${status} where id= ${id}`
    con.query(string, (err, result)=>{
        if(result.affectedRows == 1){
            con.query('select * from clientes where id ='+ id, (err, result) => {
                res.json(result)
            })
        }else{
            res.send(400).end()
        }
    })
}

module.exports = {
    all,
    get_matricula,
    add_funcionario,
    delete_funcionario,
    update_funcionario
}