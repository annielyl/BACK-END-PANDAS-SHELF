import { Media } from 'src/media/entities/media.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Review {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({name: 'title', length: 120 })
  title: string;

  @Column({name: 'reiew_text', length: 1000 })
  reiew_text: string;

  @Column({name: 'evaluation'})
  evaluation: number;

  @ManyToOne(() => User)
  @JoinColumn()
  user: User;

  @ManyToOne(() => Media)
  @JoinColumn()
  media: Media;
  
}

