import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from 'src/users/users.entity';

const databaseConfig = (): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '1234',
  database: 'nestjs',
  synchronize: true,
  entities: [User],
});

export default databaseConfig;
