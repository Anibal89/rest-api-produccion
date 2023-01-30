import {pool} from './../db.js'

const getIndex2 = async(req, res)=>{
    const [result] = await pool.query('select "Endpoint getIndex2 Funcionando" as result')
    res.json(result[0])
}

export const methods = {
    getIndex2
}