const db = require('../config/database');

exports.listAllDokter = async (req,res) =>{
    const response = await db.query('SELECT * FROM k01_tmasterdokterpengirim ORDER BY dok_name ASC');
    res.status(200).send(response.rows)
};