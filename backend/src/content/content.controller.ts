import { Body, Controller, Get, Put } from '@nestjs/common';
import { ContentService } from './content.service';
import { Advantage } from '../entities/advantage.entity';
import { HeroContent } from '../entities/hero.entity';

@Controller('content')
export class ContentController {
  constructor(private readonly contentService: ContentService) {}

  @Get()
  async getContent() {
    return this.contentService.getContent(); // Исправлено на getContent()
  }

  @Put('advantages')
  async updateAdvantages(@Body() advantages: Partial<Advantage>[]) {
    return this.contentService.updateAdvantages(advantages);
  }

  @Put('hero')
  async updateHero(@Body() heroData: Partial<HeroContent>) {
    return this.contentService.updateHero(heroData); // Исправлено на updateHero()
  }

  // Отдельный endpoint для инициализации (если нужен)
  @Get('init')
  async initializeContent() {
    return this.contentService.initializeDefaultContent();
  }
}
