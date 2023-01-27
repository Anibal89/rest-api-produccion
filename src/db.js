import {createPool} from 'mysql2/promise';

//Configuracion de dba
import {
    DB_HOST,
    DB_DATABASE,
    DB_USER,
    DB_PORT,
    DB_PASSWORD
} from "./config.js" 

 export const pool = createPool({
    host:DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_DATABASE
});

