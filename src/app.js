import  express  from "express";
import morgan from "morgan";

import EmpeladosRoutes from './routes/empleado.routes.js'; 
import idexRoutes from './routes/index.routes.js'

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use(idexRoutes);
app.use('/api',EmpeladosRoutes);

app.use((req,res, next)=>{
    res.status(404).json({
        message: ' Endpoint No Encontrado'
    })

})

export default app;