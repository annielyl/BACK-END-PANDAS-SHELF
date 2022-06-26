import { Media } from 'src/media/entities/media.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Studio {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ name: 'name' , length: 50 })
  name: string;

  @Column({ name: 'picture', length: 300 })
  picture: string;
  
  @Column({ name: 'founder_at' })
  founderAt: Date;

  @ManyToOne(() => Media, Media => Media.studio)
  media: Media;
}