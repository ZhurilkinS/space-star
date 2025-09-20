import { Injectable } from '@nestjs/common';
import { Advantage } from '../entities/advantage.entity';
import { HeroContent } from '../entities/hero.entity';
import { AdvantageRepository } from 'src/repositories/advantage.repository';
import { HeroRepository } from 'src/repositories/hero.repository';


@Injectable()
export class ContentService {
  constructor(
    private readonly advantageRepository: AdvantageRepository,
    private readonly heroRepository: HeroRepository,
  ) {}

  // Метод для получения контента (добавлен)
  async getContent() {
    const [advantages, hero] = await Promise.all([
      this.advantageRepository.findAllActive(),
      this.heroRepository.getContent(),
    ]);

    return {
      advantages: advantages.map((adv) => ({
        id: adv.id,
        title: adv.title,
        title2: adv.title2,
        description: adv.description,
        active: adv.active,
      })),
      hero: {
        title: hero.title,
        title2: hero.title2,
        placeholder: hero.placeholder,
      },
    };
  }

  async updateAdvantages(
    advantages: Partial<Advantage>[],
  ): Promise<Advantage[]> {
    await this.advantageRepository.clear();

    const newAdvantages = advantages.map((item) =>
      this.advantageRepository.create({
        ...item,
        active: item.active !== undefined ? item.active : true,
      }),
    );

    return this.advantageRepository.save(newAdvantages);
  }

  // Метод для обновления hero (добавлен)
  async updateHero(heroData: Partial<HeroContent>): Promise<HeroContent> {
    return this.heroRepository.upsertContent(heroData);
  }

  async initializeDefaultContent(): Promise<void> {
    const advantagesCount = await this.advantageRepository.count();
    if (advantagesCount === 0) {
      const defaultAdvantages = [
        {
          title: 'мы',
          title2: '1',
          description: 'на рынке',
          active: true,
        },
        {
          title: 'гарантируем',
          title2: '50%',
          description: 'безопасность',
          active: true,
        },
        {
          title: 'календарик за',
          title2: '2001г.',
          description: 'в подарок',
          active: true,
        },
        {
          title: 'путешествие',
          title2: '597',
          description: 'дней',
          active: true,
        },
      ];

      await this.advantageRepository.save(defaultAdvantages);
    }

    const heroCount = await this.heroRepository.count();
    if (heroCount === 0) {
      await this.heroRepository.save({
        title: 'ПУТЕШЕСТВИЕ ',
        title2: 'на красную планету',
        placeholder: 'Начать путешествие',
      });
    }
  }
}
