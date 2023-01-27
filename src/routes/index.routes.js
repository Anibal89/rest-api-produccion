import {Router} from "express";
import { methods  as indexController } from "../controllers/index.controller.js";

const router = Router();

router.get('/ping',indexController.ping);

export default router;