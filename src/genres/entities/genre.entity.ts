import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Media } from 'src/media/entities/media.entity';
@Entity()
export class Genre {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ name: 'type' })
  type: string;

  @ManyToMany(() =>  Media)
  @JoinTable()
  media:  Media[];
}
