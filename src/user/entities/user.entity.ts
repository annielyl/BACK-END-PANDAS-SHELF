//import { ReviewsMovie } from 'src/reviews-movies/entities/reviews-movie.entity';
import { ReviewsMovie } from 'src/reviews-movies/entities/reviews-movie.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @Column({ name: 'email' })
  email: string;

  @Column({ name: 'password' })
  password: string;

  @Column({ default: true })
  is_admin: boolean;

  @ManyToMany(() =>ReviewsMovie, reviewsMovie => reviewsMovie.user)
  reviewsMovie: ReviewsMovie[];

}
