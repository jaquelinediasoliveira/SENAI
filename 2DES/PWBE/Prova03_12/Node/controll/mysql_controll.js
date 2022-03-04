const mysql = require('mysql')
const con = mysql.createConnection({
    'user':'root',
    'database':'pesqueiro',
    'host':'localhost'
})

module.exports = {
    con
}