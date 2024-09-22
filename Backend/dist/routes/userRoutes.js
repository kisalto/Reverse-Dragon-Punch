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
const userController_1 = require("../src/controller/userController");
const userService_1 = require("../src/service/userService");
const routes = (0, express_1.Router)();
const userService = new userService_1.UserService();
const userController = new userController_1.UserController(userService);
routes.get('/users/findAll', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.json(yield userController.getAll());
}));
routes.get('/users/findById/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.json(yield userController.findbyId(parseInt(req.params.id)));
}));
routes.post('/users/save', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.json(yield userController.save(req.body));
}));
routes.put('/users/update/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.json(yield userController.update(req.body, parseInt(req.params.id)));
}));
routes.delete('/users/delete/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.json(yield userController.delete(parseInt(req.params.id)));
}));
exports.default = routes;
