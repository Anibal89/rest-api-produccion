import {pool} from './../db.js'

const ping = ('/ping',async(req, res)=>{
    const [result] = await pool.query('select "hola mundo" as result')
    res.json(result[0])
})

export const methods = {
    ping
}