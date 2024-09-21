import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { UserService } from "../service/userService";
import { User } from "../entity/user";

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    async getAll() {
        return await this.userService.findAll();
    }

    errorCatch(error: any) {
        if (error instanceof Error)
            throw new HttpException(error.message || 'Error finding user', HttpStatus.BAD_REQUEST);
        else
            throw new HttpException('Error finding user', HttpStatus.BAD_REQUEST);
    }

    @Get()
    async findbyId(@Param('id') id: number) {
        try {
            return await this.userService.findById(id);
        } catch (error) {
            this.errorCatch(error)
        }
    }

    @Post()
    async save(@Body() userData: Partial<User>) {
        try {
            if (userData.isVet != null || userData.isAdmin != null)
                throw new HttpException('forbidden action', HttpStatus.FORBIDDEN);

            await this.userService.save(userData);
            return { message: 'User created successfully' }
        } catch (error) {
            this.errorCatch(error)
        }
    }

    @Put()
    async update(@Body() userData: Partial<User>, @Param('id') id: number) {
        try {
            if (userData.isVet != null || userData.isAdmin != null)
                throw new HttpException('forbidden action', HttpStatus.FORBIDDEN);

            await this.userService.update(userData, id);
            return { message: 'User updated successfully' }
        } catch (error) {
            this.errorCatch(error)
        }
    }

    @Delete()
    async delete(@Param('id') id: number) {
        try {
            const result = await this.userService.delete(id);
            if (!result.affected)
                throw new HttpException('User not found', HttpStatus.NOT_FOUND);
            return { message: 'User deleted successfully' }
        } catch (error) {
            this.errorCatch(error)
        }
    }
}
