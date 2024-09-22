"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const userService_1 = require("../service/userService");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userService.findAll();
        });
    }
    errorCatch(error) {
        if (error instanceof Error)
            throw new common_1.HttpException(error.message || 'Error finding user', common_1.HttpStatus.BAD_REQUEST);
        else
            throw new common_1.HttpException('Error finding user', common_1.HttpStatus.BAD_REQUEST);
    }
    findbyId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.userService.findById(id);
            }
            catch (error) {
                this.errorCatch(error);
            }
        });
    }
    save(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (userData.isVet != null || userData.isAdmin != null)
                    throw new common_1.HttpException('forbidden action', common_1.HttpStatus.FORBIDDEN);
                yield this.userService.save(userData);
                return { message: 'User created successfully' };
            }
            catch (error) {
                this.errorCatch(error);
            }
        });
    }
    update(userData, id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (userData.isVet != null || userData.isAdmin != null)
                    throw new common_1.HttpException('forbidden action', common_1.HttpStatus.FORBIDDEN);
                yield this.userService.update(userData, id);
                return { message: 'User updated successfully' };
            }
            catch (error) {
                this.errorCatch(error);
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.userService.delete(id);
                if (!result.affected)
                    throw new common_1.HttpException('User not found', common_1.HttpStatus.NOT_FOUND);
                return { message: 'User deleted successfully' };
            }
            catch (error) {
                this.errorCatch(error);
            }
        });
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findbyId", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "save", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "delete", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [userService_1.UserService])
], UserController);
