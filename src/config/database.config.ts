import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const databaseConfig = (): TypeOrmModuleOptions => ({
  type: 'postgres', // or 'postgres', 'sqlite', etc.
  host: 'localhost', // Change as needed
  port: 5432, // Default MySQL port; change if using a different DB
  username: 'postgres',
  password: '1234',
  database: 'nestjs',
  synchronize: true,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
});

export default databaseConfig;
