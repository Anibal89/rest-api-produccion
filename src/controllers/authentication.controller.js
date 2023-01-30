import {pool} from './../db.js'

const getPruebaAunthentication = async(req, res)=>{
    const [result] = await pool.query('select "Endpoint getPruebaAunthentication Funcionando" as result')
    res.json(result[0])
}

export const methods = {
    getPruebaAunthentication
}