import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { AppDataSource } from "../../database/dataBank";
import { User } from "../entity/user";

@Injectable()
export class UserService {
    async save(userData: Partial<User>) {
        if (!userData.nickname)
            throw new HttpException('Nickname is required', HttpStatus.BAD_REQUEST);

        if (await this.verifyNickname(userData.nickname))
            throw new HttpException('Nickname taken', HttpStatus.CONFLICT);

        const user = AppDataSource.manager.create(User, userData);
        await AppDataSource.manager.save(user);
    }

    async verifyNickname(nickname: string): Promise<User | null> {
        return AppDataSource.getRepository(User).findOneBy({ nickname });
    }

    async findAll(): Promise<User[]> {
        return await AppDataSource.getRepository(User).find();
    }

    async findById(id: number): Promise<User | null> {
        return AppDataSource.getRepository(User).findOneBy({ id })
    }

    async delete(id: number) {
        return await AppDataSource.getRepository(User).delete(id);
    }
}
