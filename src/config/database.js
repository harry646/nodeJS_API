const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();
const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

pool.on('connect', ()=> {
    console.log('Success Connect to Database !!!');
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};