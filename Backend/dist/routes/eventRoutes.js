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
const eventService_1 = require("../src/service/eventService");
const eventController_1 = require("../src/controller/eventController");
const routes = (0, express_1.Router)();
const eventService = new eventService_1.EventService();
const eventController = new eventController_1.EventController(eventService);
routes.get('/event/findAll', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.json(yield eventController.findAll());
}));
routes.get('/event/findById/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.json(yield eventController.findById(parseInt(req.params.id)));
}));
routes.post('/event/save', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.json(yield eventController.save(req.body));
}));
routes.put('/event/update/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.json(yield eventController.update(req.body, parseInt(req.params.id)));
}));
routes.delete('/event/delete/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.json(yield eventController.delete(parseInt(req.params.id)));
}));
exports.default = routes;
