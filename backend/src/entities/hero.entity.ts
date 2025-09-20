import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('hero_content')
export class HeroContent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 200 })
  title: string;

  @Column({ length: 200 })
  title2: string;

  @Column({ length: 100 })
  placeholder: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
