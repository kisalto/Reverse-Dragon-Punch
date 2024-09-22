"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gameService_1 = require("../src/service/gameService");
const gameController_1 = require("../src/controller/gameController");
const routes = (0, express_1.Router)();
const gameService = new gameService_1.GameService();
const gameController = new gameController_1.GameController(gameService);
routes.get('/game/findAll', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.json(yield gameController.findAll());
}));
routes.get('/game/findById/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.json(yield gameController.findById(parseInt(req.params.id)));
}));
routes.post('/game/save', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.json(yield gameController.save(req.body));
}));
routes.put('/game/update/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.json(yield gameController.update(req.body, parseInt(req.params.id)));
}));
routes.delete('/game/delete/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.json(yield gameController.delete(parseInt(req.params.id)));
}));
exports.default = routes;
