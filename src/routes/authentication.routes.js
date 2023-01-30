import {Router} from 'express';
import { methods as AuthController  } from '../controllers/authentication.controller.js';

const router = Router();

router.get('/PruebaA',AuthController.getPruebaAunthentication);

export default router;