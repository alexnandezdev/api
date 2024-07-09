import { Router } from "express";
import infoController from "../controller/infoController.js";

const router=new Router()
//Obtener la Info
router.get('/info',infoController.index)
//Enviar la info
router.post('/info',infoController.store)
//Consultar info especifica
router.get('/info:id',infoController.detail)

export default router