import {Router} from 'express';
import { methods as EmpleadoController } from '../controllers/empleados.controller.js';

const router = Router();

router.get('/empleados',EmpleadoController.getEmpleados);
router.post('/addEmpelado/',EmpleadoController.addEmpleado);
router.get('/empleado/:id',EmpleadoController.getEmpleado)
router.put('/UpdateEmpleado/:id', EmpleadoController.updateEmpleado);
router.delete('/DeleteEmpleado/:id',EmpleadoController.deleteEmpelado);

export default router;