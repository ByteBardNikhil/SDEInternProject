import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto'; // Adjust path as necessary
import { User } from './users.entity'; // Assume you have a User entity defined
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = this.userRepository.create(createUserDto); // Create a new user instance
    return await this.userRepository.save(user); // Save to the database
  }
  findMany() {
    return this.userRepository.find();
  }
  findByEmail(email: string) {
    return this.userRepository.findOne({ where: { email: email } });
  }
  async update(dto: CreateUserDto) {
    const user = await this.userRepository.findOne({
      where: { email: dto.email },
    });

    if (!user) {
      throw new Error('User not found');
    }

    user.name = dto.name;
    user.password = dto.password;

    return await this.userRepository.save(user);
  }
  async delete(email: string) {
    const user = await this.userRepository.findOne({
      where: { email: email },
    });

    if (!user) {
      throw new Error('User not found');
    }

    return await this.userRepository.remove(user);
  }
}
