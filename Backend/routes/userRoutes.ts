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
    const user = parseInt(req.params.id)
    return res.json(await userController.findbyId(user))
});

routes.post('/users/save', async (req, res) =>{
    const userData = req.body;
    return res.json(await userController.save(userData))
});

routes.put('/users/update/:id', async (req, res) => {
    const userData = req.body;
    const userId = parseInt(req.params.id)
    return res.json(await userController.update(userData, userId))
});

routes.delete('/users/delete/:id', async (req, res) => {
    const user = parseInt(req.params.id)
    return res.json(await userController.delete(user))
});

export default routes;