import { Router } from "express";

const routes = Router();

routes.get('/', (req, res) => {
    return res.send("batata 2");
});

export default routes;