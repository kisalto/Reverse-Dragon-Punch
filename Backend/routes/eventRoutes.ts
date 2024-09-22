import { Router } from "express";
import { EventService } from "../src/service/eventService";
import { EventController } from "../src/controller/eventController";

const routes = Router();

const eventService = new EventService();
const eventController = new EventController(eventService);

routes.get('/event/', async (req,res) => {
    return res.json(await eventController.findAll())
});

routes.get('/event/findById/:id', async (req,res) => {
    return res.json(await eventController.findById(parseInt(req.params.id)))
});

routes.post('/event/save', async (req,res) => {
    return res.json(await eventController.save(req.body))
});

routes.put('/event/update/:id', async (req,res) => {
    return res.json(await eventController.update(req.body, parseInt(req.params.id)))
});

routes.delete('/event/delete/:id', async (req,res) => {
    return res.json(await eventController.delete(parseInt(req.params.id)))
});

export default routes;