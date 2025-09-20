import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { MenuService } from './menu/menu.service';
import { ContentService } from './content/content.service';

@Injectable()
export class AppService implements OnApplicationBootstrap {
  constructor(
    private readonly menuService: MenuService,
    private readonly contentService: ContentService,
  ) {}

  async onApplicationBootstrap() {
    console.log('Initializing default data...');
    await this.menuService.initializeDefaultMenu();
    await this.contentService.initializeDefaultContent();
    console.log('Default data initialized successfully');
  }
}
