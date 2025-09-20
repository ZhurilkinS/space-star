import { Injectable } from '@nestjs/common';
import { ContentService } from '../content/content.service';
import { MenuService } from '../menu/menu.service';
import {
  AdminData,
  ContentData,
  UpdateContentDto,
  UpdateMenuDto,
  MenuItem,
} from './types/admin.types';

@Injectable()
export class AdminService {
  constructor(
    private readonly contentService: ContentService,
    private readonly menuService: MenuService,
  ) {}

  async getContent(): Promise<ContentData> {
    return this.contentService.getContent();
  }

  async updateContent(contentData: UpdateContentDto): Promise<ContentData> {
    if (contentData.advantages) {
      await this.contentService.updateAdvantages(contentData.advantages);
    }

    if (contentData.hero) {
      await this.contentService.updateHero(contentData.hero);
    }

    return this.getContent();
  }

  async getMenu(): Promise<MenuItem[]> {
    return this.menuService.getMenu();
  }

  async updateMenu(menuData: UpdateMenuDto): Promise<MenuItem[]> {

    return this.menuService.updateMenu(menuData.menu);
  }

  async getAllData(): Promise<AdminData> {
    const [content, menu] = await Promise.all([
      this.getContent(),
      this.getMenu(),
    ]);

    return {
      content,
      menu,
    };
  }
}
