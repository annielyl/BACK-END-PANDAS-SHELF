import { ReviewsMovie } from 'src/reviews-movies/entities/reviews-movie.entity';
import { Genre } from '../../genres/entities/genre.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Movie {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column( {name: 'title'} )
  title: string;

  @Column({name: 'evaluation'})
  evaluation: number;

  @Column({name: 'description'})
  description: string;

  @Column({name: 'year'})
  year: number;

  @Column({name: 'directors'})
  directors: string;

  @Column({name: 'genre'})
  genre: string;
  //@ManyToOne(() => Genre)
  //q@JoinColumn()
  //genre: Genre;

  @OneToMany(() => ReviewsMovie, (ReviewsMovie) => ReviewsMovie.movie, { cascade: true })
  ReviewsMovie: ReviewsMovie[];
}
