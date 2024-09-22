import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { FighterService } from "../service/fighterService";
import { Fighter } from "../entity/fighter";

@Controller('fighter')
export class FighterController {
    constructor(private readonly fighterService: FighterService) {}

    @Get()
    async findAll() {
        return await this.fighterService.findAll();
    }

    errorCatch(error: any) {
        if (error instanceof Error)
            throw new HttpException(error.message || 'Error finding fighter', HttpStatus.BAD_REQUEST);
        else
            throw new HttpException('Error finding fighter', HttpStatus.BAD_REQUEST);
    }

    @Get()
    async findById(@Param('id') id: number) {
        try {
            return await this.fighterService.findById(id);
        } catch (error) {
            this.errorCatch(error)
        }
    }

    @Post()
    async save(@Body() fighterData: Partial<Fighter>) {
        try {
            await this.fighterService.save(fighterData)
            return { message: 'Fighter created successfully' }
        } catch (error) {
            this.errorCatch(error)
        }
    }

    @Put()
    async update(@Body() fighterData: Partial<Fighter>, @Param('id') id: number) {
        try {
            await this.fighterService.update(fighterData, id)
            return { message: 'Fighter updated successfully' }
        } catch (error) {
            this.errorCatch(error)
        }
    }

    @Delete()
    async delete(@Param('id') id: number) {
        try {
            const result = await this.fighterService.delete(id);
            if (!result.affected)
                throw new HttpException('User not found', HttpStatus.NOT_FOUND)
            return { message: 'Fighter deleted successfully' }
        } catch (error) {
            this.errorCatch(error)
        }
    }
}