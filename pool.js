require('dotenv').config();
const { Pool }=require('pg')

const pool= new Pool({
    host:process.env.DB_HOST,
    port:process.env.DB_PORT,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.DB_NAME
})
console.log(process.env.DB_PASS);
module.exports=pool