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
exports.FighterController = void 0;
const common_1 = require("@nestjs/common");
const fighterService_1 = require("../service/fighterService");
let FighterController = class FighterController {
    constructor(fighterService) {
        this.fighterService = fighterService;
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.fighterService.findAll();
        });
    }
    errorCatch(error) {
        if (error instanceof Error)
            throw new common_1.HttpException(error.message || 'Error finding fighter', common_1.HttpStatus.BAD_REQUEST);
        else
            throw new common_1.HttpException('Error finding fighter', common_1.HttpStatus.BAD_REQUEST);
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.fighterService.findById(id);
            }
            catch (error) {
                this.errorCatch(error);
            }
        });
    }
    save(fighterData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.fighterService.save(fighterData);
                return { message: 'Fighter created successfully' };
            }
            catch (error) {
                this.errorCatch(error);
            }
        });
    }
    update(fighterData, id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.fighterService.update(fighterData, id);
                return { message: 'Fighter updated successfully' };
            }
            catch (error) {
                this.errorCatch(error);
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.fighterService.delete(id);
                if (!result.affected)
                    throw new common_1.HttpException('User not found', common_1.HttpStatus.NOT_FOUND);
                return { message: 'Fighter deleted successfully' };
            }
            catch (error) {
                this.errorCatch(error);
            }
        });
    }
};
exports.FighterController = FighterController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FighterController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FighterController.prototype, "findById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FighterController.prototype, "save", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], FighterController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FighterController.prototype, "delete", null);
exports.FighterController = FighterController = __decorate([
    (0, common_1.Controller)('fighter'),
    __metadata("design:paramtypes", [fighterService_1.FighterService])
], FighterController);
