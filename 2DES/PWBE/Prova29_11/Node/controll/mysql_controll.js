const mysql = require('mysql');
const con = mysql.createConnection({
    'user': 'root',
    'database': 'Contabilidade',
    'host': 'localhost'
})

module.exports = {
    con
}