import { Injectable } from "@nestjs/common";
import { AppDataSource } from "../../database/dataBank";
import { Guide } from "../entity/guide";

@Injectable()
export class GuideService {
    async findAll() {
        return AppDataSource.getRepository(Guide).find();
    }
    async findById(id: number) {
        return AppDataSource.getRepository(Guide).findOneBy({ id })
    }
    async save(guideData: Partial<Guide>) {
        const guide = AppDataSource.getRepository(Guide).create(guideData)
        await AppDataSource.getRepository(Guide).save(guide)
    }
    async update(guideData: Partial<Guide>, id: number) {
        await AppDataSource.getRepository(Guide).update(id, guideData)
    }
    async delete(id: number) {
        return await AppDataSource.getRepository(Guide).delete(id)
    }
}