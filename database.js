
import mysql from "mysql2";

import dotenv from "dotenv";
dotenv.config();

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

async function getList(id){
    // Arrey destructured
    const [result] = await pool.query("SELECT * FROM test");

    //This is a prepared statement in javascript
    // const [result] = await pool.query("SELECT * FROM test WHERE test_id = ?",[id]);
    return result;
}
const outPut = await getList(3);
console.log(outPut);

async function insert(id, name, phone){
    //used prepared statement
    pool.query("INSERT INTO test(test_id, name, phone) VALUES(?,?,?)",[id,name,phone]);
}

// insert(4,"Michael", 900000)