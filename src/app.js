import  express  from "express";
import morgan from "morgan";
import cors from "cors";

import EmpeladosRoutes from './routes/empleado.routes.js'; 
import idexRoutes from './routes/index.routes.js'

//Importacion de Rutas Nuevas

import AuthenticationRoutes from './routes/authentication.routes.js';
import LinksRoutes from './routes/links.routes.js'
import Index2  from './routes/index2.routes.js'

const app = express();
app.use(cors());

app.use(express.json());
app.use(morgan("dev"));

app.use(idexRoutes);
app.use('/api',EmpeladosRoutes);

//Rutas Nuevas
app.use('/auth',AuthenticationRoutes);
app.use('/lin',LinksRoutes);
app.use('/In',Index2);


//

app.use((req,res, next)=>{
    next(); //Codigo Nuevo
    res.status(404).json({
        message: ' Endpoint No Encontrado'
    })

})

export default app;