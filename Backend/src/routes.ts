import { Router } from "express";

const routes = Router();

routes.get('/', (req, res) => {
    return res.send("batata 2");
});

routes.get('/teste', (req, res) => {
    return res.send("teste");
}); 

export default routes;