import { Router } from "express";
import { UserController } from "../src/controller/userController";
import { UserService } from "../src/service/userService";

const routes = Router();

const userService = new UserService();
const userController = new UserController(userService);

routes.get('/users/findAll', async (req, res) => {
    return res.json(await userController.getAll());
});

routes.get('/users/findById/:id', async (req,res) => {
    return res.json(await userController.findbyId(parseInt(req.params.id)))
});

routes.post('/users/save', async (req, res) =>{
    return res.json(await userController.save(req.body))
});

routes.put('/users/update/:id', async (req, res) => {
    return res.json(await userController.update(req.body, parseInt(req.params.id)))
});

routes.delete('/users/delete/:id', async (req, res) => {
    return res.json(await userController.delete(parseInt(req.params.id)))
});

export default routes;