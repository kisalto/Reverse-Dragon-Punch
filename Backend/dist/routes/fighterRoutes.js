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
const fighterController_1 = require("../src/controller/fighterController");
const fighterService_1 = require("../src/service/fighterService");
const routes = (0, express_1.Router)();
const fighterService = new fighterService_1.FighterService();
const fighterController = new fighterController_1.FighterController(fighterService);
routes.get('/fighter/findAll', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.json(yield fighterController.findAll());
}));
routes.get('/fighter/findById/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.json(yield fighterController.findById(parseInt(req.params.id)));
}));
routes.post('/fighter/save', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.json(yield fighterController.save(req.body));
}));
routes.put('/fighter/update/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.json(yield fighterController.update(req.body, parseInt(req.params.id)));
}));
routes.delete('/fighter/delete/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.json(yield fighterController.delete(parseInt(req.params.id)));
}));
exports.default = routes;
