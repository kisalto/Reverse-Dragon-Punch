import { Injectable } from "@nestjs/common";
import { Fighter } from "../entity/fighter";
import { AppDataSource } from "../../database/dataBank";

@Injectable()
export class FighterService {
    async findAll() {
        return AppDataSource.getRepository(Fighter).find();
    }
    async findById(id: number) {
        return AppDataSource.getRepository(Fighter).findOneBy({ id })
    }
    async save(fighterData: Partial<Fighter>) {
        const guide = AppDataSource.getRepository(Fighter).create(fighterData)
        await AppDataSource.getRepository(Fighter).save(guide)
    }
    async update(fighterData: Partial<Fighter>, id: number) {
        await AppDataSource.getRepository(Fighter).update(id, fighterData)
    }
    async delete(id: number) {
        return await AppDataSource.getRepository(Fighter).delete(id)
    }
}