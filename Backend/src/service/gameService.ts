import { Injectable } from "@nestjs/common";
import { AppDataSource } from "../../database/dataBank";
import { Game } from "../entity/game";

@Injectable()
export class GameService {
    async findAll() {
        return AppDataSource.getRepository(Game).find();
    }
    async findById(id: number) {
        return AppDataSource.getRepository(Game).findOneBy({ id })
    }
    async save(gameData: Partial<Game>) {
        const game = AppDataSource.getRepository(Game).create(gameData)
        await AppDataSource.getRepository(Game).save(game)
    }
    async update(gameData: Partial<Game>, id: number) {
        await AppDataSource.getRepository(Game).update(id, gameData)
    }
    async delete(id: number) {
        return await AppDataSource.getRepository(Game).delete(id)
    }
}