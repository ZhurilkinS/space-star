import { Body, Controller, Get, Put } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuItem } from 'src/entities/menu.entity';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Get()
  async getMenu() {
    return this.menuService.getMenu();
  }

  @Put()
  async updateMenu(@Body() menuData: Partial<MenuItem>[]) {
    return this.menuService.updateMenu(menuData);
  }
}
