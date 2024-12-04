import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CreateUserDto } from './dto/create-user.dto'; // Adjust the path as necessary
import { UsersService } from './users.service'; // Assume you have a UsersService for handling business logic

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {} // Injecting UsersService

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile() {
    return { message: 'Protected route!' };
  }

  @Post() // This will handle POST requests to /users
  async createUser(@Body() createUserDto: CreateUserDto) {
    const newUser = await this.usersService.create(createUserDto);
    return { message: 'User created!', user: newUser };
  }
  @Get() // This will handle POST requests to /users
  findMany() {
    return this.usersService.findMany();
  }

  @Put(':email')
  async updateUser(@Param('email') email: string, @Body() dto: CreateUserDto) {
    return await this.usersService.update(dto);
  }
  //http://localhost:3000/users/john.doe@example.com
  /*
  {
    "name": "John Doe Updated",
    "email": "john.doe@example.com",
    "password": "newsecurepassword"
}
  */
  @Delete(':email')
  async delete(@Param('email') email: string) {
    return await this.usersService.delete(email);
  }
}
