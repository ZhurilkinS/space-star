import { Injectable } from '@nestjs/common';
import { MenuItem } from 'src/entities/menu.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class MenuRepository extends Repository<MenuItem> {
  constructor(private dataSource: DataSource) {
    super(MenuItem, dataSource.createEntityManager());
  }

  async findAllActive(): Promise<MenuItem[]> {
    return this.find({
      where: { visible: true },
      order: { id: 'ASC' }, // Сортируем по ID
    });
  }

  async findAll(): Promise<MenuItem[]> {
    return this.find({ order: { id: 'ASC' } });
  }
}
