import { Movie } from 'src/movies/entities/movie.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class ReviewsMovie {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({name: 'description'})
  description: string;

  @Column({name: 'evaluation'})
  evaluation: number;

  @ManyToOne(() => Movie)
  @JoinColumn()
  movie: Movie;

  @ManyToMany(() => User, user => user.reviewsMovie)
  user: User[];
}
