"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
exports.FighterService = void 0;
const common_1 = require("@nestjs/common");
const fighter_1 = require("../entity/fighter");
const dataBank_1 = require("../../database/dataBank");
let FighterService = class FighterService {
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return dataBank_1.AppDataSource.getRepository(fighter_1.Fighter).find();
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return dataBank_1.AppDataSource.getRepository(fighter_1.Fighter).findOneBy({ id });
        });
    }
    save(fighterData) {
        return __awaiter(this, void 0, void 0, function* () {
            const guide = dataBank_1.AppDataSource.getRepository(fighter_1.Fighter).create(fighterData);
            yield dataBank_1.AppDataSource.getRepository(fighter_1.Fighter).save(guide);
        });
    }
    update(fighterData, id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield dataBank_1.AppDataSource.getRepository(fighter_1.Fighter).update(id, fighterData);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield dataBank_1.AppDataSource.getRepository(fighter_1.Fighter).delete(id);
        });
    }
};
exports.FighterService = FighterService;
exports.FighterService = FighterService = __decorate([
    (0, common_1.Injectable)()
], FighterService);
