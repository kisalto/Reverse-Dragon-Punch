import { AppDataSource } from "../../database/dataBank";
import { User } from "../entity/user";
import { Body, Controller, Get, Post } from "@nestjs/common";

@Controller('users')
export class UserController {
    @Get("/get")
    async getAll() {
        return await AppDataSource.manager.find(User)
    }

    @Post("/save")
    async save(@Body() userData: Partial<User>) {
        console.log(userData.nickname);
        const user =  AppDataSource.manager.create(User, userData);
        return await AppDataSource.manager.save(user);
    }

}