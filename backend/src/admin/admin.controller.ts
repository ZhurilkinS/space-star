import { Controller, Put, Body, Get } from '@nestjs/common';
import { AdminService } from './admin.service';
import {
  AdminData,
  ContentData,
  type UpdateContentDto,
  type UpdateMenuDto,
  MenuItem,
} from './types/admin.types';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get('content')
  async getContent(): Promise<ContentData> {
    return this.adminService.getContent();
  }

  @Put('content')
  async updateContent(
    @Body() contentData: UpdateContentDto,
  ): Promise<ContentData> {
    return this.adminService.updateContent(contentData);
  }

  @Get('menu')
  async getMenu(): Promise<MenuItem[]> {
    return this.adminService.getMenu();
  }

  @Put('menu')
  async updateMenu(@Body() menuData: UpdateMenuDto): Promise<MenuItem[]> {
    return this.adminService.updateMenu(menuData);
  }

  @Get('all-data')
  async getAllData(): Promise<AdminData> {
    return this.adminService.getAllData();
  }
}
