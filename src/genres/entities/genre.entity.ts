import { Movie } from '../../movies/entities/movie.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';
@Entity()
export class Genre {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ name: 'type' })
  type: string;

  //@OneToMany(() => Movie, (movie) => movie.genre)
  //movies: Movie[];
}
