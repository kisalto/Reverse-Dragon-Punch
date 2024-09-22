import { Injectable } from "@nestjs/common";
import { AppDataSource } from "../../database/dataBank";
import { Event } from "../entity/event";

@Injectable()
export class EventService {
    async findAll() {
        return AppDataSource.getRepository(Event).find();
    }
    async findById(id: number) {
        return AppDataSource.getRepository(Event).findOneBy({ id })
    }
    async save(eventData: Partial<Event>) {
        const event = AppDataSource.getRepository(Event).create(eventData)
        await AppDataSource.getRepository(Event).save(event)
    }
    async update(eventData: Partial<Event>, id: number) {
        await AppDataSource.getRepository(Event).update(id, eventData)
    }
    async delete(id: number) {
        return await AppDataSource.getRepository(Event).delete(id)
    }
}