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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const dataBank_1 = require("../../database/dataBank");
const user_1 = require("../entity/user");
let UserService = class UserService {
    save(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!userData.nickname)
                throw new common_1.HttpException('Nickname is required', common_1.HttpStatus.BAD_REQUEST);
            if (yield this.verifyNickname(userData.nickname))
                throw new common_1.HttpException('Nickname taken', common_1.HttpStatus.CONFLICT);
            const user = dataBank_1.AppDataSource.getRepository(user_1.User).create(userData);
            yield dataBank_1.AppDataSource.getRepository(user_1.User).save(user);
        });
    }
    verifyNickname(nickname) {
        return __awaiter(this, void 0, void 0, function* () {
            return dataBank_1.AppDataSource.getRepository(user_1.User).findOneBy({ nickname });
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield dataBank_1.AppDataSource.getRepository(user_1.User).find();
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return dataBank_1.AppDataSource.getRepository(user_1.User).findOneBy({ id });
        });
    }
    update(userData, id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!userData.nickname)
                throw new common_1.HttpException('Nickname is required', common_1.HttpStatus.BAD_REQUEST);
            const existingUser = yield this.verifyNickname(userData.nickname);
            if (existingUser && existingUser.id !== id)
                throw new common_1.HttpException('Nickname taken', common_1.HttpStatus.CONFLICT);
            yield dataBank_1.AppDataSource.getRepository(user_1.User).update(id, userData);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield dataBank_1.AppDataSource.getRepository(user_1.User).delete(id);
        });
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)()
], UserService);
