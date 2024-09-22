import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { EventService } from "../service/eventService";
import { Event } from "../entity/event";

@Controller('event')
export class EventController {
    constructor(private readonly eventService: EventService) {}

    @Get()
    async findAll() {
        return await this.eventService.findAll();
    }

    errorCatch(error: any) {
        if (error instanceof Error)
            throw new HttpException(error.message || 'Error finding event', HttpStatus.BAD_REQUEST);
        else
            throw new HttpException('Error finding event', HttpStatus.BAD_REQUEST);
    }

    @Get()
    async findById(@Param('id') id: number) {
        try {
            return await this.eventService.findById(id);
        } catch (error) {
            this.errorCatch(error)
        }
    }

    @Post()
    async save(@Body() eventData: Partial<Event>) {
        try {
            await this.eventService.save(eventData)
            return { message: 'Event created successfully' }
        } catch (error) {
            this.errorCatch(error)
        }
    }

    @Put()
    async update(@Body() eventData: Partial<Event>, @Param('id') id: number) {
        try {
            await this.eventService.update(eventData, id)
            return { message: 'Event updated successfully' }
        } catch (error) {
            this.errorCatch(error)
        }
    }

    @Delete()
    async delete(@Param('id') id: number) {
        try {
            const result = await this.eventService.delete(id);
            if (!result.affected)
                throw new HttpException('User not found', HttpStatus.NOT_FOUND)
            return { message: 'Event deleted successfully' }
        } catch (error) {
            this.errorCatch(error)
        }
    }
}