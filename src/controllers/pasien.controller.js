const db = require("../config/database");

exports.listAllPasien = async (req, res) => {
    const response = await db.query(" SELECT * FROM public.k01_tmasterpasien order by id DESC");
    res.status(200).send(response.rows);
};

exports.findPasienbyID = async (req, res) => {
    const pasienID = parseInt(req.params.id);
    const response = await db.query('SELECT * FROM public.k01_tmasterpasien where id = $1',[pasienID]);
    res.status(200).send(response.rows);
};

exports.updatePasienbyID = async(req, res) => {
    const pasienID = parseInt(req.params.id);
    const { psn_code, psn_nik, psn_gender, psn_merried, psn_birth_date, psn_priority, psn_name, psn_kategori, psn_address, psn_zipcode, psn_telp, psn_email, created_at, updated_at, psn_city_id, psn_cmp_id, psn_cou_id, psn_perusahaan_id, psn_prop_id, user_id, psn_bagian, psn_kelusia, psn_hp, psn_work } = req.body;

    const response = await db.query(
        "UPDATE public.k01_tmasterpasien SET psn_code = $1, psn_nik = $2, psn_gender = $3, psn_merried = $4, psn_birth_date = $5, psn_priority = $6, psn_name = $7, psn_kategori = $8, psn_address = $9, psn_zipcode = $10, psn_telp = $11, psn_email = $12, created_at = $13, updated_at = $14, psn_city_id = $15, psn_cmp_id = $16, psn_cou_id = $17, psn_perusahaan_id = $18, psn_prop_id = $19, user_id = $20, psn_bagian = $21, psn_kelusia = $22, psn_hp = $23, psn_work = $24 WHERE id= $25",
        [psn_code, psn_nik, psn_gender, psn_merried, psn_birth_date, psn_priority, psn_name, psn_kategori, psn_address, psn_zipcode, psn_telp, psn_email, created_at, updated_at, psn_city_id, psn_cmp_id, psn_cou_id, psn_perusahaan_id, psn_prop_id, user_id, psn_bagian, psn_kelusia, psn_hp, psn_work, pasienID]
    );

    res.status(200).send({ message: "Pasien Success Updated !!" });
};

exports.deletePasienbyID = async (req, res) => {
    const pasienID = parseInt(req.params.id);
    await db.query('DELETE FROM public.k01_tmasterpasien where id=$1',
    [pasienID]);

    res.status(200).send({ message: 'Pasien Success Remove !!' });
};

exports.createPasien = async(req, res) =>{
    const { psn_code, psn_nik, psn_gender, psn_merried, psn_birth_date, psn_priority, psn_name, psn_kategori, psn_address, psn_zipcode, psn_telp, psn_email, created_at, updated_at, psn_city_id, psn_cmp_id, psn_cou_id, psn_perusahaan_id, psn_prop_id, user_id, psn_bagian, psn_kelusia, psn_hp, psn_work } = req.body;
    const { rows } = await db.query(
        "INSERT INTO public.k01_tmasterpasien(psn_code, psn_nik, psn_gender, psn_merried, psn_birth_date, psn_priority, psn_name, psn_kategori, psn_address, psn_zipcode, psn_telp, psn_email, created_at, updated_at, psn_city_id, psn_cmp_id, psn_cou_id, psn_perusahaan_id, psn_prop_id, user_id, psn_bagian, psn_kelusia, psn_hp, psn_work) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24)",
        [psn_code, psn_nik, psn_gender, psn_merried, psn_birth_date, psn_priority, psn_name, psn_kategori, psn_address, psn_zipcode, psn_telp, psn_email, created_at, updated_at, psn_city_id, psn_cmp_id, psn_cou_id, psn_perusahaan_id, psn_prop_id, user_id, psn_bagian, psn_kelusia, psn_hp, psn_work]
        );
    res.status(201).send({
        message: "Pasien success added !!",
        body:{
            pasien: {psn_code, psn_nik, psn_gender, psn_merried, psn_birth_date, psn_priority, psn_name, psn_kategori, psn_address, psn_zipcode, psn_telp, psn_email, created_at, updated_at, psn_city_id, psn_cmp_id, psn_cou_id, psn_perusahaan_id, psn_prop_id, user_id, psn_bagian, psn_kelusia, psn_hp, psn_work}
        },
    });
};