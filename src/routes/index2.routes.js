import {Router} from "express";
import { methods  as index2Controller } from "../controllers/index2.controller.js";

const router = Router();

router.get('/index2',index2Controller.getIndex2);

export default router;