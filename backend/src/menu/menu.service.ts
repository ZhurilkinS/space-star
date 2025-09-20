import { Injectable } from '@nestjs/common';

import { MenuItem } from '../entities/menu.entity';
import { MenuRepository } from '../repositories/menu.repository';

@Injectable()
export class MenuService {
  constructor(private readonly menuRepository: MenuRepository) {}

  async getMenu(): Promise<MenuItem[]> {
    return this.menuRepository.findAllActive();
  }

  async getAllMenu(): Promise<MenuItem[]> {
    return this.menuRepository.findAll();
  }

  async updateMenu(items: Partial<MenuItem>[]): Promise<MenuItem[]> {
    // Удаляем старые записи и создаем новые
    await this.menuRepository.clear();

    const newItems = items.map((item) =>
      this.menuRepository.create({
        ...item,
        visible: item.visible !== undefined ? item.visible : true,
      }),
    );
    return this.menuRepository.save(newItems);
  }

  async initializeDefaultMenu(): Promise<void> {
    const count = await this.menuRepository.count();
    if (count === 0) {
      const defaultMenu = [
        { title: 'Главная', url: '#main', visible: true },
        { title: 'Технология', url: '#technology', visible: true },
        { title: 'График полетов', url: '#schedule', visible: true },
        { title: 'Гарантии', url: '#guarantees', visible: true },
        { title: 'О компании', url: '#about', visible: true },
        { title: 'Контакты', url: '#contacts', visible: true },
      ];

      await this.updateMenu(defaultMenu);
    }
  }
}
