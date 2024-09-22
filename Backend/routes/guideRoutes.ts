import { Router } from "express";
import { GuideService } from "../src/service/guideService";
import { GuideController } from "../src/controller/guideController";

const routes = Router();

const guideService = new GuideService();
const guideController = new GuideController(guideService);

routes.get('/guide/', async (req,res) => {
    return res.json(await guideController.findAll())
});

routes.get('/guide/findById/:id', async (req,res) => {
    return res.json(await guideController.findById(parseInt(req.params.id)))
});

routes.post('/guide/save', async (req,res) => {
    return res.json(await guideController.save(req.body))
});

routes.put('/guide/update/:id', async (req,res) => {
    return res.json(await guideController.update(req.body, parseInt(req.params.id)))
});

routes.delete('/guide/delete/:id', async (req,res) => {
    return res.json(await guideController.delete(parseInt(req.params.id)))
});

export default routes;