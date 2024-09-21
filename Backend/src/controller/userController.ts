import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post } from "@nestjs/common";
import { UserService } from "../service/userService";
import { User } from "../entity/user";

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    async getAll() {
        return await this.userService.findAll();
    }

    @Get()
    async findbyId(@Param('id') id: number) {
        try {
            return await this.userService.findById(id);
        } catch (error) {
            throw new HttpException('Error finding user', HttpStatus.BAD_REQUEST);
        }
    }

    @Post()
    async save(@Body() userData: Partial<User>) {
        try {
            await this.userService.save(userData);
            return { message: 'User created successfully' }
        } catch (error) {
            throw new HttpException('Error saving user', HttpStatus.BAD_REQUEST);
        }
    }

    @Delete()
    async delete (@Param('id') id: number) {
        try {
            const result = await this.userService.delete(id);
            if (!result.affected)
                throw new HttpException('User not found', HttpStatus.NOT_FOUND); 
            return { message: 'User deleted successfully' }
        } catch (error) {
            throw new HttpException('Error deleting user', HttpStatus.BAD_REQUEST);
        }
    }
}
