import { Router } from "express";
import { FighterController } from "../src/controller/fighterController";
import { FighterService } from "../src/service/fighterService";

const routes = Router();

const fighterService = new FighterService();
const fighterController = new FighterController(fighterService);

routes.get('/fighter/findAll', async (req,res) => {
    return res.json(await fighterController.findAll())
});

routes.get('/fighter/findById/:id', async (req,res) => {
    return res.json(await fighterController.findById(parseInt(req.params.id)))
});

routes.post('/fighter/save', async (req,res) => {
    return res.json(await fighterController.save(req.body))
});

routes.put('/fighter/update/:id', async (req,res) => {
    return res.json(await fighterController.update(req.body, parseInt(req.params.id)))
});

routes.delete('/fighter/delete/:id', async (req,res) => {
    return res.json(await fighterController.delete(parseInt(req.params.id)))
});

export default routes;