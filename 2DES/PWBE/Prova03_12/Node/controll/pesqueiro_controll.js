const {con} = require("./mysql_controll.js")

const todos = (req, res) => {
    let string = 'select * from pescaria'
    con.query(string, (err, result) => {
        res.json(result)
    })
}

const todos_id = (req, res) => {
    let string = 'select * from pescaria where id ='+ req.params.id
    con.query(string, (err, result) => {
        res.json(result)
    })
} 

const nova_pescaria = (req,res) => {
    let body = req.body
    let string = 'insert into pescaria(id, cidade, quantidade) values (\'' + body.id + '\',' + '\'' + body.cidade + '\',' + body.quantidade + ')';
    con.query(string, (err, result) => {
        if(err != null){
            res.status(400).end()
        }else {
            res.status(200).end()
        }
    })
}


const apagar_pescaria = (req, res) => {
    let string = 'delete from pescaria where id =' + req.params.id
    con.query(string, (err, result) => {
        if(result.affectedRows == 0) {
            res,send(400).end()
        }else {
            res.send(200).end()
        }
    })
}

const atualizar_pescaria = (req, res) => {
    let id = req.body.id
    let cidade = '\'' + req.body.cidade + '\''
    let quantidade = req.body.quantidade
    let string = `update pescaria set cidade = ${cidade}, quantidade = ${quantidade} where id = ${id}`
    con.query(string, (err, result) => {
        if(result.affectedRows == 1) {
            con.query(`select * from pescaria where id =` + id, (err, result) => {
                res.json(result)
            })
        }else {
            res.send(400).end()
        }
    })
}

module.exports = {
    todos,
    todos_id,
    nova_pescaria,
    apagar_pescaria,
    atualizar_pescaria
}