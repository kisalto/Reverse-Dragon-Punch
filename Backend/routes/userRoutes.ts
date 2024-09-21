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

routes.put('/users/update', async (req, res) => {

});

routes.delete('/users/delete', async (req, res) => {

});

export default routes;