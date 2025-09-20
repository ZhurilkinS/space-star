import { Injectable } from '@nestjs/common';
import { Advantage } from 'src/entities/advantage.entity';
import { Repository } from 'typeorm';
import { DataSource } from 'typeorm';

@Injectable()
export class AdvantageRepository extends Repository<Advantage> {
  constructor(private dataSource: DataSource) {
    super(Advantage, dataSource.createEntityManager());
  }

  async findAllActive(): Promise<Advantage[]> {
    return this.find({
      where: { active: true },
      order: { id: 'ASC' }, // Сортируем по ID
    });
  }

  async findAll(): Promise<Advantage[]> {
    return this.find({ order: { id: 'ASC' } });
  }
}
