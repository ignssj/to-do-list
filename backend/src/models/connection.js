const mysql2 = require("mysql2/promise");

var connection = mysql2.createPool({
    host:'localhost',
    user:'root',
    password:'root',
    database:'todo-list'
});

module.exports = connection;