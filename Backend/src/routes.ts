import { Router } from "express";
import { UserController } from "./controller/userController";

const routes = Router();

const userController = new UserController;

routes.get('/', (req, res) => {
    return res.send("batata 2");
});

routes.get('/users/get', async (req, res) => {
    const users = await userController.getAll();
    return res.json(users);
}); 

routes.post('/users/save', async (req, res) =>{
    const userData = req.body;
    console.log(userData);
    const savedUser = await userController.save(userData);
    return res.json(savedUser)
}); 

export default routes;