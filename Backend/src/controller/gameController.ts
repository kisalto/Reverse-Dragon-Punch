import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { GameService } from "../service/gameService";
import { Game } from "../entity/game";

@Controller('game')
export class GameController {
    constructor(private readonly gameService: GameService) {}

    @Get()
    async findAll() {
        return await this.gameService.findAll();
    }

    errorCatch(error: any) {
        if (error instanceof Error)
            throw new HttpException(error.message || 'Error finding game', HttpStatus.BAD_REQUEST);
        else
            throw new HttpException('Error finding game', HttpStatus.BAD_REQUEST);
    }

    @Get()
    async findById(@Param('id') id: number) {
        try {
            return await this.gameService.findById(id);
        } catch (error) {
            this.errorCatch(error)
        }
    }

    @Post()
    async save(@Body() gameData: Partial<Game>) {
        try {
            await this.gameService.save(gameData)
            return { message: 'Game created successfully' }
        } catch (error) {
            this.errorCatch(error)
        }
    }

    @Put()
    async update(@Body() gameData: Partial<Game>, @Param('id') id: number) {
        try {
            await this.gameService.update(gameData, id)
            return { message: 'Game updated successfully' }
        } catch (error) {
            this.errorCatch(error)
        }
    }

    @Delete()
    async delete(@Param('id') id: number) {
        try {
            const result = await this.gameService.delete(id);
            if (!result.affected)
                throw new HttpException('User not found', HttpStatus.NOT_FOUND)
            return { message: 'Game deleted successfully' }
        } catch (error) {
            this.errorCatch(error)
        }
    }
}