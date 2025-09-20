import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { ContentModule } from '../content/content.module';
import { MenuModule } from '../menu/menu.module';

@Module({
  imports: [ContentModule, MenuModule],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
