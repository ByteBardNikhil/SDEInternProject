import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import databaseConfig from './config/database.config';
import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  imports: [TypeOrmModule.forRoot(databaseConfig()), UsersModule, AuthModule],
  controllers: [AppController], // Controllers go here
  providers: [AppService], // Services go here
})
export class AppModule {}
