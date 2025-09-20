export interface Advantage {
  id?: number;
  title: string;
  description: string;
  active: boolean;
}

export interface HeroContent {
  id?: number;
  title: string;
  placeholder: string;
}

export interface MenuItem {
  id?: number;
  title: string;
  url: string;
  visible: boolean;
}

export interface ContentData {
  advantages: Advantage[];
  hero: HeroContent;
}

export interface AdminData {
  content: ContentData;
  menu: MenuItem[];
}

export interface UpdateContentDto {
  advantages?: Advantage[];
  hero?: HeroContent;
}

export interface UpdateMenuDto {
  menu: MenuItem[];
}
