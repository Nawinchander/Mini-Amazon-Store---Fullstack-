/// mysql 


const mysql = require("mysql2");

const db = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});

const connectSQL = () => {
    db.connect((err) => {
        if (err) {
            console.log("MySQL Connection Failed");
        } else {
            console.log("MySQL Connected");
        }
    });
};

module.exports = connectSQL;




