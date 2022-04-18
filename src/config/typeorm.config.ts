import { TypeOrmModuleOptions } from '@nestjs/typeorm';

/* TypeORM Config */
export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '8459',
  database: 'board_app',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
  logging: true,
};
