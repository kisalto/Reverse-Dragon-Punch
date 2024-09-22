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
const guideService_1 = require("../src/service/guideService");
const guideController_1 = require("../src/controller/guideController");
const routes = (0, express_1.Router)();
const guideService = new guideService_1.GuideService();
const guideController = new guideController_1.GuideController(guideService);
routes.get('/guide/findAll', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.json(yield guideController.findAll());
}));
routes.get('/guide/findById/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.json(yield guideController.findById(parseInt(req.params.id)));
}));
routes.post('/guide/save', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.json(yield guideController.save(req.body));
}));
routes.put('/guide/update/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.json(yield guideController.update(req.body, parseInt(req.params.id)));
}));
routes.delete('/guide/delete/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.json(yield guideController.delete(parseInt(req.params.id)));
}));
exports.default = routes;
