import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Advantage } from '../entities/advantage.entity';
import { HeroContent } from '../entities/hero.entity';
import { MenuItem } from 'src/entities/menu.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +(process.env.DB_PORT || 5432),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD || '123',
  database: process.env.DB_NAME,
  entities: [MenuItem, Advantage, HeroContent],
  synchronize: process.env.NODE_ENV !== 'production',
  dropSchema: true,
  logging: process.env.NODE_ENV !== 'production',
};
