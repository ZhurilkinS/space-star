import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContentService } from './content.service';
import { ContentController } from './content.controller';
import { Advantage } from '../entities/advantage.entity';
import { HeroContent } from '../entities/hero.entity';
import { AdvantageRepository } from 'src/repositories/advantage.repository';
import { HeroRepository } from 'src/repositories/hero.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Advantage, HeroContent])],
  controllers: [ContentController],
  providers: [ContentService, AdvantageRepository, HeroRepository],
  exports: [ContentService],
})
export class ContentModule {}
