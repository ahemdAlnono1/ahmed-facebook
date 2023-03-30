import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Bost {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  body: string;

  // the photos is just url
  @Column()
  photos: string;
}
