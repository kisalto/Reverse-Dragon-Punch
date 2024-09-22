import { Router } from "express";
import { GameService } from "../src/service/gameService";
import { GameController } from "../src/controller/gameController";

const routes = Router();

const gameService = new GameService();
const gameController = new GameController(gameService);

routes.get('/game/findAll', async (req,res) => {
    return res.json(await gameController.findAll())
});

routes.get('/game/findById/:id', async (req,res) => {
    return res.json(await gameController.findById(parseInt(req.params.id)))
});

routes.post('/game/save', async (req,res) => {
    return res.json(await gameController.save(req.body))
});

routes.put('/game/update/:id', async (req,res) => {
    return res.json(await gameController.update(req.body, parseInt(req.params.id)))
});

routes.delete('/game/delete/:id', async (req,res) => {
    return res.json(await gameController.delete(parseInt(req.params.id)))
});

export default routes;