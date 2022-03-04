const mysql = require('mysql');
const con = mysql.createConnection({
    'user': 'root',
    'database': 'cantina',
    'host': 'localhost'
})

module.exports = {
    con
}