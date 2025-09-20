import { Injectable } from '@nestjs/common';
import { HeroContent } from 'src/entities/hero.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class HeroRepository extends Repository<HeroContent> {
  constructor(private dataSource: DataSource) {
    super(HeroContent, dataSource.createEntityManager());
  }

  async getContent(): Promise<HeroContent> {
    return (await this.findOne({ where: {} })) || this.createDefault();
  }

  private async createDefault(): Promise<HeroContent> {
    const defaultContent = this.create({
      title: 'ПУТЕШЕСТВИЕ',
      title2: 'на красную планету',
      placeholder: 'Найти путешествие',
    });
    return this.save(defaultContent);
  }
  async upsertContent(heroData: Partial<HeroContent>): Promise<HeroContent> {
    const existing = await this.findOne({ where: {} });

    if (existing) {
      // Обновляем существующую запись
      await this.update(existing.id, heroData);
      const updated = await this.findOne({ where: { id: existing.id } });
      return updated!; // ! потому что мы только что обновили, она должна существовать
    } else {
      // Создаем новую запись
      return this.save(heroData);
    }
  }
}
