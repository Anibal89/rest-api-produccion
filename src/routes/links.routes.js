import {Router} from 'express';
import { methods as linksController  } from '../controllers/links.controller.js';

const router = Router();

router.get('/PruebaLinks',linksController.getPruebaLinks);
router.post('/add',linksController.AddLinks);

export default router;