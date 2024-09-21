import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { Guide } from "../entity/guide";
import { GuideService } from "../service/guideService";

@Controller('guides')
export class GuideController {
    
    constructor(private readonly guideService: GuideService) {}

    @Get()
    async findAll() {
        return await this.guideService.findAll();
    }

    errorCatch(error: any) {
        if (error instanceof Error)
            throw new HttpException(error.message || 'Error finding user', HttpStatus.BAD_REQUEST);
        else
            throw new HttpException('Error finding user', HttpStatus.BAD_REQUEST);
    }

    @Get()
    async findById(@Param('id') id: number) {
        try {
            return await this.guideService.findById(id);
        } catch (error) {
            this.errorCatch(error)
        }
    }

    @Post()
    async save(@Body() guideData: Partial<Guide>) {
        try {
            await this.guideService.save(guideData)
            return { message: 'Guide created successfully' }
        } catch (error) {
            this.errorCatch(error)
        }
    }

    @Put()
    async update(@Body() guideData: Partial<Guide>, @Param('id') id: number) {
        try {
            await this.guideService.update(guideData, id)
            return { message: 'Guide updated successfully' }
        } catch (error) {
            this.errorCatch(error)
        }
    }

    @Delete()
    async delete(@Param('id') id: number) {
        try {
            const result = await this.guideService.delete(id);
            if (!result.affected)
                throw new HttpException('User not found', HttpStatus.NOT_FOUND)
            return { message: 'Guide deleted successfully' }
        } catch (error) {
            this.errorCatch(error)
        }
    }
}